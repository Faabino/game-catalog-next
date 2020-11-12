import { GetServerSideProps } from "next";
import { getDatabase } from "../../database";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Platforms = ({ platforms }) => {
  return (
    <>
      <h1>Platforms</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {console.log(JSON.stringify(platforms, null, 2))}
        {platforms.map((platform) => {
          return (
            <Link href={`/platforms/${platform.slug}`} passHref>
              <Card className="myCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={platform.platform_logo.url} />
                <Card.Body>
                  <Card.Title>{platform.name}</Card.Title>
                  <Card.Text>{platform.summary}</Card.Text>
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

export default Platforms;

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();
  const platforms = await mongodb.db().collection("platforms").find().toArray();
  platforms.map((platform) => {
    platform._id = platform._id.toString();
  });

  return {
    props: {
      platforms,
    },
  };
};
