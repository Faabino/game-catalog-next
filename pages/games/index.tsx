import { GetServerSideProps } from "next";
import { getDatabase } from "../../database";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Games = ({ games }) => {
  return (
    <>
      <div className="container-lg">
        <div className="container-lg mt-5 mb-5">
          <div className="row">
            <div className="col">
              <h1>Games</h1>
            </div>
            <div className="col text-right">
              <Link href="/games/new-game" passHref>
                <Button className="btn btn-success btn-lg" variant="primary">
                  Create Game
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {games.map((game) => {
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
                    {console.log(game)}
                    {game.platforms.map((platform) => {
                      return (
                        <Card.Img
                          className="ml-2"
                          style={{ width: "38px", height: "38px" }}
                          variant="top"
                          src={platform.platform_logo?.url}
                        />
                      );
                    })}
                    <div className="d-flex card-footer justify-content-center flex-wrap">
                      <Button variant="primary">Purchase</Button>
                    </div>
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
