import getAllLaunches from "../../services/getAllLaunches";

describe("Fetch API", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("Llamar API y retornar datos", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
    getAllLaunches("https://api.spacexdata.com/v4/launches/past").then(
      (response) => {
        expect(response.data).toEqual("12345");
      }
    );
    expect(fetch.mock.calls[0][0]).toEqual(
      "https://api.spacexdata.com/v4/launches/past"
    );
  });
});
