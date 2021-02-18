import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import About from "../../components/About";

describe("<About/>", () => {
  const about = mount(<About />);
  test("render del componente about", () => {
    expect(about.length).toEqual(1);
  });
});

describe("about snaaapshot", () => {
  test("Comprobar ui del about", () => {
    const about = create(<About />);
    expect(about.toJSON()).toMatchSnapshot();
  });
});
