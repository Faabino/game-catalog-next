import { GetServerSideProps } from "next";
import { getDatabase } from "../../database";
import { Image, Card, Button } from "react-bootstrap";
import Link from "next/link";

const Platform = ({ platform }) => {
  return (
    <>
      <div className="container-lg">
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center align-items-center">
            <h1>{platform.name}</h1>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row">
            <div className="col text-center">
              <Image
                className="mx-auto img-fluid"
                src={platform.platform_logo.url}
              />
            </div>
            <div className="col">{platform.summary}</div>
          </div>
        </div>

        <div className="game-list row d-flex justify-content-center">
          {platform.games.map((game) => {
            return (
              <Link href={`/games/${game.slug}`} passHref>
                <Card
                  className="card border-info p-1 m-1 shadow-lg myCard"
                  style={{ width: "12rem" }}
                >
                  <Card.Img variant="top" src={game.cover.url} />
                  <Card.Body>
                    <Card.Title
                      className="card-title text-truncate"
                      style={{ fontSize: "12px" }}
                    >
                      {game.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Platform;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();
  const platform = await mongodb
    .db()
    .collection("platforms")
    .findOne(context.params);
  platform._id = platform._id.toString();

  return {
    props: {
      platform,
    },
  };
};
