import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Header from "../../components/Header";

describe("<Header/>", () => {
  const header = mount(<Header />);
  test("render del componente header", () => {
    expect(header.length).toEqual(1);
  });

});

describe("Header snaaapshot", () => {
  test("Comprobar ui del header", () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});
