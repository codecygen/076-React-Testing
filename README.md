# Testing Procedures for React Web Apps
There are 2 types of testing of apps. Normally both of them has to be done.

- **Manual Testing:** This is done visually or experimentally by the developer while writing the code. It is error prone as it is very hard to test all possible combinations and scenarios.
- **Automated Testing:** This is done by writing code. This is technical but it allows you to test all building blocks at once.

Automated tests consists of 3 categories:
- **Unit Tests:** Test of individual building blocks (functions, components) in isolation. Projects typically contain dozens of unit tests. This is the most common and important test type.
- **Integration Tests:** This one used to test combination of multiple building blocks, for example multiple components working together. Project typically contain a couple of integration tests. This one is also important but we mostly focus on Unit Tests.
- **End-to-End (e2e) Tests:** Test complete scenarios of your app as the user would experience them. This test involves such as logging in and then going to a certain page. This is just like manual testing but it is automated. Projects typically contain only a few e2e tests. It is important but can also be done manually (partially).

There are 2 tools for testing. which are already installed when you install the React app;
- **Jest:** This is a tool for running the tests and asserting results.
- **React Testing Library:** Tool for simulating (rendering) the React app and components.

Initially, there are 2 files for testing:
- **/src/components/setupTests.js**, as the name suggests, it setups the test file and we don't need to do anything with it. This is the actual section where we will write the test code.
- **/src/components/App.test.js**, this file is to test the **App.js**.

Running test:
- **npm test**, this command will fire up an options screen. From there, if you hit **button a**, it will run all the test files that has the extension of ***.test.js**. If you want to quit the test press **button q** or **CTRL C**.

When writing a test, you have to do 3 A's.
- **Arrange**, set up the test data, test conditions and test environment.
- **Act**, run logic that should be tested (e.g. execute function).
- **Assert**, compare execution results with expected results.

Keywords For Code Tests:
- **React-Test-Greeting-Component**, **Greeting.test.js** file is prepared for it. Run the test with **npm test**.
- **React-Test-Async-Component-Code**, **React-Test-Async-Component-Replacing-Real-Fetch-Request-With-Mock**, **Async.test.js** file is prepared for it. Run the test with **npm test**.