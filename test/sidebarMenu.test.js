import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { BrowserRouter, Route } from "react-router-dom";
import SidebarMenu from "../src/SidebarMenu";

afterEach(cleanup);

test("The menu component should open and close", () => {
  const { getByTestId, debug } = render(<BrowserRouter>
    <Route path="/" component={SidebarMenu} />
  </BrowserRouter>);

  const menuBtn = getByTestId("menuBtn");
  const menuDrawer = getByTestId("menuDrawer");
  const contentVeil = getByTestId("contentVeil");
  // by default the menu is not expanded
  expect( menuDrawer.getAttribute("aria-expanded") ).toBe( "false" );
  // click the menu button, the menu should be visible
  fireEvent.click(menuBtn);
  expect( menuDrawer.getAttribute("aria-expanded") ).toBe( "true" );
  // clicking the content should update the state and hide the menu
  fireEvent.click(contentVeil);
  expect( menuDrawer.getAttribute("aria-expanded") ).toBe( "false" );
});
