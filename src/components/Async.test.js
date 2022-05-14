// React-Test-Async-Component-Code
// Check notes in "Greeting.test.js" for more info
// on functions and methods that are not described here.

import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    // Because "Async" component has an async fetch request,
    // we have to make the test function an async function.
    test('renders posts if request succeeds', async () => {
        render(<Async />);

        // Assert
        // https://www.w3.org/TR/html-aria/#docconformance
        // Check this page to see that for "li" tags, role is "listitem"
        // for screen, there are a lot of find functions, get functions
        // and query functions (screen.find*, screen.get*, screen.query*).
        // get functions will throw an error if element is not found
        // query finctions won't do that.
        // find functions will return a promise.
        // here we use find function because it will return a promise which we
        // need to handle async components.
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});