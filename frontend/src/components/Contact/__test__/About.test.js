import About from "../About";
import { createRoot } from "react-dom/client";
import { render, screen, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

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

  act(() => {
    const root = createRoot(container);
    root.render(<About />);
  });
});
