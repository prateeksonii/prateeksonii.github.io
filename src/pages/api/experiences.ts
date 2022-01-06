import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";

const experiencesApiHandler: NextApiHandler = async (req, res) => {
  const prismaClient: PrismaClient = new PrismaClient();

  switch (req.method) {
    case "POST": {
      const {
        company,
        description,
        jobTitle,
      }: {
        jobTitle: string;
        description: string;
        company: string;
      } = req.body;

      const result = await prismaClient.experience.create({
        data: {
          company,
          description,
          jobTitle,
        },
      });

      return res.status(201).json({
        ok: true,
        result,
      });
    }

    case "GET": {
      const result = await prismaClient.experience.findMany();
      res.json({
        ok: true,
        result,
      });
    }
  }
};

export default experiencesApiHandler;
