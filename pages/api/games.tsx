import { NextApiRequest, NextApiResponse } from "next";
import { getDatabase } from "../../database";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const mongodb = await getDatabase();
    const toInsert = {
      ...request.body,
      cover: { url: request.body.url },
      platforms: request.body.platform_slug.split(","),
    };
    delete toInsert.url;
    await mongodb.db().collection("games").insertOne(toInsert);
    response.redirect("/games");
  } else {
    response.statusCode = 405;
    response.redirect("/games");
  }
}
