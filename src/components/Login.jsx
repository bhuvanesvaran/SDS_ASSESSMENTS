import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Container,
  CircularProgress,
  Alert,
} from "@mui/material";

const LoginForm = () => {
  const [message, setMessage] = useState(null);

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setMessage(null);
    setSubmitting(false);
    setMessage("Successfully logged in");
  };

  return (
    <Container maxWidth="sm">
      <Card
        variant="outlined"
        sx={{
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Login
          </Typography>
          {message && (
            <Alert
              severity={
                message === "Successfully logged in" ? "success" : "error"
              }
              sx={{ mb: 2 }}
            >
              {message}
            </Alert>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />

                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red" }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <CircularProgress size={24} /> : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginForm;
