import { GetServerSideProps } from "next";
import { getDatabase } from "../../database";

const Platform = ({ platform }) => {
  return <h1>{platform.name}</h1>;
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
