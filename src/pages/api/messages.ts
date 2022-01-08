import { prismaClient } from "@/utils/db";
import { NextApiHandler } from "next";

const messagesApiHandler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "POST": {
      const {
        name,
        message,
      }: {
        name: string;
        message: string;
      } = req.body;

      const result = await prismaClient.message.create({
        data: {
          senderName: name,
          message,
        },
      });

      return res.status(201).json({
        ok: true,
        result,
      });
    }

    case "GET": {
      const result = await prismaClient.message.findMany();
      res.json({
        ok: true,
        result,
      });
    }
  }
};

export default messagesApiHandler;
