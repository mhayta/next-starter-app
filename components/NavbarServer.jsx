/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-05-13 15:16:56
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-07-02 16:40:00
 */
import { auth, signIn, signOut } from "@/auth";
import ThemeSwitch from "@/components/ui/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 flex justify-between">
      <Link href="/">Logo</Link>
      {session && session.user ? (
        <div>
          {session.user.name}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">Signout</Button>
          </form>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button type="submit">Signin</Button>
        </form>
      )}
      <ThemeSwitch />
    </nav>
  );
}
