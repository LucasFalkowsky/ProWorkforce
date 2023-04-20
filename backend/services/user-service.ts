import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextApiResponse } from "next";

const getUserService = async (
    userId: string,
    res: NextApiResponse<User>,
): Promise<void> => {
    const user = await prisma.user.findUnique({
        where: { id: userId }
    })
    if (user) {
        return void res.status(200).json(user);
    }
    return void res.status(400).end();
}

export {
    getUserService
}