import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Banner from "../../components/Banner";

describe("<Banner/>", () => {
  const banner = mount(<Banner />);
  test("render del componente banner", () => {
    expect(banner.length).toEqual(1);
  });
});

describe("banner snaaapshot", () => {
  test("Comprobar ui del banner", () => {
    const banner = create(<Banner />);
    expect(banner.toJSON()).toMatchSnapshot();
  });
});
