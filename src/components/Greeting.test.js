// React-Test-Greeting-Component
// render is to render the component file
// screen is used to screen the virtual DOM.
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// test function is globally available, you don't need to import
// it from somewhere
// When writing a test, you have to do 3 A's.
// 1) Arrange, set up the test data, test conditions and test environment
// 2) Act, run logic that should be tested (e.g. execute function)
// 3) Assert, compare execution results with expected results.
test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    // for screen, there are a lot of find functions, get functions
    // and query functions (screen.find*, screen.get*, screen.query*).
    // get functions will throw an error if element is not found
    // query finctions won't do that.
    // find functions will return a promise.
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    // Here we have a globally available expect function
    // This function can get an argument such as a number, a string or a DOM element
    expect(helloWorldElement).toBeInTheDocument();
});