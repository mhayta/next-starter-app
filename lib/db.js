/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-05-11 17:14:26
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-05-14 23:44:25
 */

import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "development") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
