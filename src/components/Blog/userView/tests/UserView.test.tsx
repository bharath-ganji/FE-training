import { unmountComponentAtNode } from "react-dom";
import { screen } from "../../../../tests/testUtils";

import data from "../../../../tests/testData";
import UserView from "../UserView";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render } from "@testing-library/react";

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

it("should render correctly with params", () => {
  render(
    <MemoryRouter initialEntries={["/home/CSE/2017-2021/A"]}>
      <Routes>
        <Route
          path="/home/:department?/:year?/:section?"
          element={<UserView data={data.mockedState.users} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("178w1a0576")).toBeInTheDocument();
  expect(screen.getByText("admin123")).toBeInTheDocument();
});

it("should render correctly without params", () => {
  render(
    <MemoryRouter initialEntries={["/home/CSE/2017-2021/A"]}>
      <Routes>
        <Route
          path="/home/:department?/:year?/:section?"
          element={<UserView data={data.initialState} />}
        />
      </Routes>
    </MemoryRouter>,
    container
  );

  expect(screen.getByText("No Results Fount...")).toBeInTheDocument();
});
