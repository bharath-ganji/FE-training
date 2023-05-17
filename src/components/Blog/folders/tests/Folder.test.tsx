import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "../../../../tests/testUtils";
import Folder from "../Folder";
import data from "../../../../tests/testData";

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

it("Folder Contains deparments data", () => {
  render(
    <Folder url_next={""} data={data.mockedState.departments} />,
    container
  );

  expect(screen.getByText("MBA")).toBeInTheDocument();
  expect(screen.getAllByText("View Details")[0]).toBeInTheDocument();
});
