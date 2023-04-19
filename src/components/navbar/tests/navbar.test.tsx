import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "../../../tests/testUtils";
import Navbar from "../Navbar";

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("navbar contains Links and logo", () => {
  render(<Navbar />, container);

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByAltText("logo")).toBeInTheDocument();
});
