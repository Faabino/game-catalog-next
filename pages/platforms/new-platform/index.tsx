import { Form, Col, Jumbotron, InputGroup, Button } from "react-bootstrap";

const newPlatform = () => {
  return (
    <>
      <div className="container-lg">
        <h1>Create a Platform</h1>
        <Form>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Platform name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formSummary">
            <Form.Label>Summary</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Jumbotron>
            <h2>Logo</h2>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>URL</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Row>
              <Col>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Width</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Height</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control />
                </InputGroup>
              </Col>
            </Form.Row>
          </Jumbotron>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default newPlatform;
