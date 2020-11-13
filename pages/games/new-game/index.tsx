import { Col, Form, Button } from "react-bootstrap";

const newGame = () => {
  return (
    <>
      <div className="container-lg">
        <h1>Create a game</h1>
        <Form action="/api/games" method="post">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Game name" name="name" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formSummary">
            <Form.Label>Summary</Form.Label>
            <Form.Control as="textarea" rows={3} name="summary" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formCover">
            <Form.Label>Cover URL</Form.Label>
            <Form.Control name="url" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formPlatformSlug">
            <Form.Label>Platform Slugs (separate with commas)</Form.Label>
            <Form.Control
              placeholder="ps4, xbox-one, nintendo-switch"
              name="platform_slug"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default newGame;
