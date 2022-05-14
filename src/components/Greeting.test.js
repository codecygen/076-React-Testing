// Here in this file, we test 3 things
// 1) Test if the text "Hello World" is in Greetings.js.
// 2) Test if "good to see you" text is in Greetings.js when the button is not clicked.
// 3) Test if "Changed" text is in Greetings.js when the button is clicked.
// 4) Test if "good to see you" text is not in Greetings.js when the button is clicked.

// React-Test-Greeting-Component
// render is to render the component file
// screen is used to screen the virtual DOM.
import { render, screen } from "@testing-library/react";
// this package tests an event like a button click
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// describe is globally available,
// this function is needed for "Test Suites" section
// the the test result. "Test Suites" represents the 
// group of components that will work together.
describe('Greeting component test group', () => {

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

    test('renders good to see you if the button was NOT clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing

        // Assert
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders Changed! if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        // here instead of "getByText", we used "queryByText", because
        // get functions will throw an error if nothing is found.
        // Instead, it will assign null as a value to outputElement. See the note above.
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    });

});