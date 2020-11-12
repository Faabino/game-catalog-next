import { GetServerSideProps } from "next";
import { getDatabase } from "../../database";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Games = ({ games }) => {
  return (
    <>
      <h1>Games</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {games.map((game) => {
          return (
            <Link href={`/games/${game.slug}`} passHref>
              <Card className="myCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={game.cover.url} />
                <Card.Body>
                  <Card.Title>{game.name}</Card.Title>
                  {game.platforms.map((platform) => {
                    console.log(platform);
                    return (
                      <Card.Img
                        className="ml-2"
                        style={{ width: "5rem" }}
                        variant="top"
                        src={platform.platform_logo.url}
                      />
                    );
                  })}
                  <Button variant="primary">Purchase</Button>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Games;

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();
  const games = await mongodb.db().collection("games").find().toArray();
  games.map((game) => {
    game._id = game._id.toString();
  });

  return {
    props: {
      games,
    },
  };
};
