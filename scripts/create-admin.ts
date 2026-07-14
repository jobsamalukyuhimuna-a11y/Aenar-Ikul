import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const username = "admin";
  const password = "admin123";

  const existing = await prisma.admin.findUnique({
    where: {
      username,
    },
  });

  if (existing) {
    console.log("Admin already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.admin.create({
    data: {
      username,
      password: hashedPassword,
    },
  });

  console.log("==================================");
  console.log("Admin account created successfully");
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("==================================");
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });