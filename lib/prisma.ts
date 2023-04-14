import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | undefined;

function createPrismaInstance() {
    if (prismaInstance) {
        return prismaInstance;
    }
    prismaInstance = new PrismaClient({
        log: ['query']
    });
    return prismaInstance
}

export const prisma = createPrismaInstance();
