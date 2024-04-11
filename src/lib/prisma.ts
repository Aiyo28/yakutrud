import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

<<<<<<< HEAD
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
=======
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
