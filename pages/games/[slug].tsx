import { GetServerSideProps } from "next";
import { getDatabase } from "../../database";

const Game = ({ game }) => {
  return <h1>{game.name}</h1>;
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
