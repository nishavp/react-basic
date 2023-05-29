import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/mockData";
import "@testing-library/jest-dom";

// to give mock api and solve fetch error
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

// check whether menu is added in cart and cart is updated or not
test("Update Cart on add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  // wait till we have search btn on the screen
  await waitFor(() => expect(body.getByTestId("menu")));
  const addBtn = body.getAllByTestId("add-to-cart-btn");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  fireEvent.click(addBtn[2]);
  fireEvent.click(addBtn[3]);
  const cartItems = body.getByTestId("cartId");
  expect(cartItems.innerHTML).toBe("4");
});
