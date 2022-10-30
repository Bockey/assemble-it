import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormEl() {
  return (
    <div className="form-container">
      <Form>
        <h3>Send us a message</h3>
        <Form.Group className="mb-3" controlId="fullname">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Label>Choose subject</Form.Label>
        <Form.Select aria-label="Select subject">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={7} placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default FormEl;
