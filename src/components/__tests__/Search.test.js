import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/mockData";
import "@testing-library/jest-dom";

// to give mock api and solve fetch error
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

// Shimmer testing
test("Search Result on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer-ui");
  expect(shimmer.children.length).toBe(6);
});

// loading restaurant cards on Homepage
test("Search Result on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // wait till we have search btn on the screen
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("rest-list");
  expect(resList.children.length).toBe(15);
});

// search actual data part
test("Search for String Food on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // wait till we have search btn on the screen
  await waitFor(() => expect(body.getByTestId("search-btn")));

  // here we are firing an event and searching the keyword "food"
  const input = body.getByTestId("search-input-id");
  fireEvent.change(input, { target: { value: "king" } });

  // here we will fire click event
  const resList = body.getByTestId("rest-list");
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);
  expect(resList.children.length).toBe(2);
});
