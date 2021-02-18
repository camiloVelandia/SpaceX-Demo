import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import PastCard from "../../components/PastCard";

describe("<PastCard/>", () => {
  const pastcard = mount(<PastCard />);
  test("render del componente pastcard", () => {
    expect(pastcard.length).toEqual(1);
  });
});

describe("pastcard snaaapshot", () => {
  test("Comprobar ui del pastcard", () => {
    const pastcard = create(<PastCard />);
    expect(pastcard.toJSON()).toMatchSnapshot();
  });
});
