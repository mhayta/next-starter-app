/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-06-28 00:48:22
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-06-28 01:08:56
 */
"use client";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {status === "authenticated" ? (
          <>
            <li>Welcome, {session.user.name}</li>
            <li>
              <a href="/api/auth/signout">Sign out</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/api/auth/signin">Sign in</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
