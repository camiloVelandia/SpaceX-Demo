import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import NextCard from "../../components/NextCard";

describe("<NextCard/>", () => {
  const nextcard = mount(<NextCard />);
  test("render del componente nextcard", () => {
    expect(nextcard.length).toEqual(1);
  });
});

describe("nextcard snaaapshot", () => {
  test("Comprobar ui del nextcard", () => {
    const nextcard = create(<NextCard />);
    expect(nextcard.toJSON()).toMatchSnapshot();
  });
});
