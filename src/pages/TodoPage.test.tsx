import { render, fireEvent, screen } from "@testing-library/react";
import TodoPage from "./TodoPage";
describe("Todo Page", () => {
  it("it renders without breaking", function () {
    render(<TodoPage />);
  });

  // snapshot test
  it("matches the previous snapshot", () => {
    const { asFragment } = render(<TodoPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  // test deleting todo
  it("delete button deletes the todo", () => {
    const { getByText, getAllByText } = render(<TodoPage />);
    expect(getByText("Create a Todo React app")).toBeInTheDocument();
    const buttonsArr = getAllByText("X");
    const firstButton = buttonsArr[0];
    fireEvent.click(firstButton);
    expect(() => {
      getByText("Create a Todo React app");
    }).toThrow();
  });
});
