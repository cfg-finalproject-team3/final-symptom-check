import Account from "../Account";
import { createRoot } from "react-dom/client";

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
  root.render(<Account />);
});
