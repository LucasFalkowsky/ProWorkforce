import { prisma } from "@/lib/prisma";
import { Company } from "@prisma/client";
import { NextApiResponse } from "next";

const getCompanyService = async (
    companyId: string,
    res: NextApiResponse<Company>,
): Promise<void> => {
    const company = await prisma.company.findUnique({
        where: { id: companyId }
    })
    if (company) {
        return void res.status(200).json(company);
    }
    return void res.status(400).end();
}

export {
    getCompanyService,
}