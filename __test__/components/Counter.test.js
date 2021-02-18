import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import CountDown from "../../components/CountDown";

describe("<CountDown/>", () => {
  const countDown = mount(<CountDown />);
  test("render del componente countDown", () => {
    expect(countDown.length).toEqual(1);
  });
});

describe("countDown snaaapshot", () => {
  test("Comprobar ui del countDown", () => {
    const countDown = create(<CountDown />);
    expect(countDown.toJSON()).toMatchSnapshot();
  });
});
