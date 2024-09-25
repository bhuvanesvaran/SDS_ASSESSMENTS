import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./Login";

describe("LoginForm", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  test("displays an error when submitting without a password", async () => {
    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/email is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error when submitting without an email", async () => {
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/email is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays success message when both email and password are filled", async () => {
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    const successMessage = await screen.findByText(/successfully logged in/i);
    expect(successMessage).toBeInTheDocument();
  });
});
