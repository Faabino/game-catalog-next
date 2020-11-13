import { GetServerSideProps } from "next";
import { getDatabase } from "../../database";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Platforms = ({ platforms }) => {
  return (
    <>
      <div className="container-lg">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col">
              <h1>Platforms</h1>
            </div>
            <div className="col text-right">
              <Link href="/platforms/new-platform" passHref>
                <Button className="btn btn-success btn-lg" variant="primary">
                  Create Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {platforms.map((platform) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch mb-5">
                <Link href={`/platforms/${platform.slug}`} passHref>
                  <Card
                    className="myCard d-flex p-3 flex-column flex-fill"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img
                      className="m-auto"
                      variant="top"
                      src={platform.platform_logo.url}
                      style={{ maxHeight: "auto", maxWidth: "50%" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <Card.Title>{platform.name}</Card.Title>
                      <Card.Text>{platform.summary}</Card.Text>
                      <Button variant="primary">View Games</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
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
