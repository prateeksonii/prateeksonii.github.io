import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";

const projectsApiHandler: NextApiHandler = async (req, res) => {
  const prismaClient: PrismaClient = new PrismaClient();

  switch (req.method) {
    case "POST": {
      const {
        title,
        imageUrl,
      }: {
        title: string;
        imageUrl: string;
      } = req.body;

      const result = await prismaClient.project.create({
        data: {
          title,
          imageUrl,
        },
      });

      return res.status(201).json({
        ok: true,
        result,
      });
    }

    case "GET": {
      const result = await prismaClient.project.findMany();
      return res.json({
        ok: true,
        result,
      });
    }
  }
};

export default projectsApiHandler;
