import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import CapsulCard from "../../components/CapsulCard";

describe("<CapsulCard/>", () => {
  const banner = mount(<CapsulCard />);
  test("render del componente banner", () => {
    expect(banner.length).toEqual(1);
  });
});

describe("banner snaaapshot", () => {
  test("Comprobar ui del banner", () => {
    const banner = create(<CapsulCard />);
    expect(banner.toJSON()).toMatchSnapshot();
  });
});
