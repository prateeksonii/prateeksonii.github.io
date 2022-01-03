import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";

const projectsApiHandler: NextApiHandler = async (req, res) => {
  const prismaClient: PrismaClient = new PrismaClient();

  switch (req.method) {
    case "POST": {
      const {
        title,
        description,
        imageUrl,
        languageId,
      }: {
        title: string;
        description: string;
        imageUrl: string;
        languageId: number;
      } = req.body;

      const result = await prismaClient.project.create({
        data: {
          title,
          description,
          imageUrl,
          languageId,
        },
      });

      return res.status(201).json({
        ok: true,
        result,
      });
    }

    case "GET": {
      const result = await prismaClient.project.findMany({
        include: {
          language: true,
        },
      });
      res.json({
        ok: true,
        result,
      });
    }
  }
};

export default projectsApiHandler;
