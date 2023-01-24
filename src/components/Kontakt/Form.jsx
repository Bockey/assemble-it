import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import FormError from "../common/FormError";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Please enter your subject"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(5, "The message must be at least 5 characters"),
});

export default function FormEl() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(null);

  //post request function to send message data from the form
  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    const newData = {
      username: data.username,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    try {
      const response = await axios.post(
        "https:/data.assemble-it.no/wp-json/contact-form-7/v1/contact-forms/158/feedback",
        newData,
        { headers: headers }
      );
      setSuccess(response.data.message);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  //rendering form on the page
  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Kontakt Oss</h3>
        <Form.Group className="mb-3" controlId="fullname">
          <Form.Label>Navn</Form.Label>
          <Form.Control
            type="text"
            name="username"
            {...register("username")}
            placeholder=""
          />
          {errors.username && <span>{errors.username.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Epost</Form.Label>
          <Form.Control
            type="email"
            name="email"
            {...register("email")}
            placeholder=""
          />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Emne</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            {...register("subject")}
            placeholder=""
          />
          {errors.subject && <span>{errors.subject.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Melding</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            {...register("message")}
            rows={7}
            placeholder=""
          />
          {errors.message && <span>{errors.message.message}</span>}
        </Form.Group>
        <Button variant="primary" type="submit">
          {submitting ? "Sender..." : "Sende"}
        </Button>
        <div className="success">{success}</div>
        {serverError && <FormError>{serverError}</FormError>}
      </Form>
    </div>
  );
}
