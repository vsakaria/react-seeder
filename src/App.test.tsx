import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toBeDefined();
});