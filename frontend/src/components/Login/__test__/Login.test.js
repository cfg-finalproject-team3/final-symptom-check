import Login from "../Login";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
// import { render, fireEvent, screen, cleanup } from "@testing-library/react";
// import { render, waitFor, screen } from "@testing-library/react";
// import axios from "axios";

// afterEach(cleanup);

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("renders react component", () => {
  const container = document.createElement("div");

  const root = createRoot(container);
  root.render(<Login />);
});

// jest.mock("axios");

// const dummyUsers = [
//   {
//     email: "test@t.com",
//     password: 123,
//   },
//   {
//     email: "example@t.com",
//     password: 456,
//   },
//   {
//     email: "unit@test.com",
//     password: 789,
//   },
// ];

// test("user login process", async () => {
//   axios.get.mockResolvedValue({ data: dummyUsers });
//   render(<Login />);

//   const userList = await waitFor(() => screen.findAllByTestId("user"));

//   expect(userList).toHaveLength(3);
// });

// it("renders button", () => { });

//test block
// test("increments counter", () => {
//   // render the component on virtual dom
//   render(<Login />);
// });

//select the elements you want to interact with
// const btn = screen.getByTestId("loginBtn");
// const emailField = screen.getByTestId("email");

// import Button from "./Button";

// test("Ensure the button shows the correct message", () => {
//   render(<Button buttonText="Test message" />);
//   const buttonElement = screen.getByText(/Test message/i);
//   const specialHeading = screen.getByTestId("special-heading");
//   expect(buttonElement).toBeInTheDocument();
//   expect(specialHeading).toBeInTheDocument();
// });

// test("Ensure the button shows", () => {
//   render(<Login />);
//   const buttonElement = screen.getByText(/Test message/i);
//   const specialHeading = screen.getByTestId("special-heading");
//   expect(buttonElement).toBeInTheDocument();
//   expect(specialHeading).toBeInTheDocument();
// });
