import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";

import data from "./testData";

const mockedStore = {
  getState: () => data.mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

const history = createMemoryHistory();

function render(ui: any, { store = mockedStore, ...renderOptions } = {}) {
  function Wrapper({ children }: any) {
    return (
      <Router location={history.location} navigator={history}>
        <Provider store={store as any}>{children}</Provider>
      </Router>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
