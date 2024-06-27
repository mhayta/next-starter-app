"use client";
/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-05-17 12:55:36
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-05-17 13:44:11
 */
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CardWrapper({
  children,
  cardTitle,
  cardDescription,
  showSocials,
  buttonLink,
  buttonLabel,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <div className="flex justify-center gap-4">Google</div>
        </CardFooter>
      )}
      <CardFooter>
        <Button variant="link" size="sm">
          <Link href={buttonLink}>{buttonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
