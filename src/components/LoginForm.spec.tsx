import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

it("works correctly", async () => {
  render(<LoginForm />);

  const inputs = screen.getAllByPlaceholderText("entrez une valeur");

  const email = inputs[0];
  const password = inputs[1];

  await userEvent.type(email, "bob@gojob.com");
  await userEvent.type(email, "secretpassword$&$&$&");

  await userEvent.click(screen.getByText("Log-in"));
});
