import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";

const languagesApiHandler: NextApiHandler = async (req, res) => {
  const prismaClient: PrismaClient = new PrismaClient();

  switch (req.method) {
    case "POST": {
      const {
        name,
      }: {
        name: string;
      } = req.body;

      const result = await prismaClient.language.create({
        data: {
          name,
        },
      });

      return res.status(201).json({
        ok: true,
        result,
      });
    }

    case "GET": {
      const result = await prismaClient.language.findMany();
      res.json({
        ok: true,
        result,
      });
    }
  }
};

export default languagesApiHandler;
