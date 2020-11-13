import { GetServerSideProps } from "next";
import { Card, Carousel } from "react-bootstrap";
import { getDatabase } from "../../database";
import Link from "next/link";

const Game = ({ game }) => {
  return (
    <>
      <div className="container-lg">
        <div className="card p-5 mb-5 mt-5" id="game-main">
          <div className="row">
            <div className="col-4 col-md-3">
              <Card.Img src={game.cover.url}></Card.Img>
            </div>
            <div className="col-8 row justify-content-center align-items-center">
              <h1 className="col-12 col-md-9">{game.name}</h1>
            </div>
          </div>
          <small className="text-muted">
            <p>
              available on
              {game.platforms.map((platform) => {
                return (
                  <Link href={`/platforms/${platform.slug}`}>
                    {" " + platform.name}
                  </Link>
                );
              })}
            </p>
          </small>
          <p id="game-summary">{game.summary}</p>
        </div>

        <h2>Screenshots</h2>

        <Carousel className="mb-3">
          {game.screenshots.map((screenshot) => {
            return (
              <Carousel.Item>
                <img className="d-block w-100" src={screenshot.url} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Game;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();
  const game = await mongodb.db().collection("games").findOne(context.params);
  game._id = game._id.toString();

  return {
    props: {
      game,
    },
  };
};
