"use server";

import prisma from "@/lib/db";
import * as bcrypt from "bcryptjs";

/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-05-17 15:17:19
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-05-17 16:47:30
 */

export default async function registerUser(user) {
  const result = await prisma.user.create({
    data: {
      name: user.username,
      email: user.email,
      password: await bcrypt.hash(user.password, 10),
    },
  });
}
