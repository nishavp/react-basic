import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

// test case name should be understandable - here we are testing logo is loading or not
test("Logo should load on rendering header", () => {
  // load only header first
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //console.log(header);
  const logo = header.getAllByTestId("logoId");
  //console.log(logo);
  expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
});

// checking online status
test("Checking Online Status", () => {
  // load only header first
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //console.log(header);
  const onlineStatus = header.getByTestId("online-status");
  //console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe(
    '<div class="green-signal"><div class="container"><p>Hii, Dummy Name You are Online !! Welcome back.</p></div></div>'
  );
});

// checking cart should have 0 items
test("Cart should have 0 items", () => {
  // load only header first
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //console.log(header);
  const cartItems = header.getByTestId("cartId");
  expect(cartItems.innerHTML).toBe("0");
});
