
# Cypress Automation Framework

## What is Cypress?

Cypress is a next-generation front-end automation testing tool built for modern web applications.

## How is Cypress Unique from Other Automation Tools?

- Cypress automatically waits for commands and assertions before moving on. No more async hell.
- Ability to test edge test cases by mocking the server response.
- Cypress takes snapshots as your tests run. You can hover over each command in the Command Log to see exactly what happened at each step.
- Due to its architectural design, Cypress delivers fast, consistent, and reliable test execution compared to other automation tools.
- View videos of your entire test execution when run from the Cypress Dashboard.

## Technology Stack

- Cypress is built on **Node.js** and comes packaged as an **npm module**.
- It uses **JavaScript** for writing tests. However, 90% of coding can be done using Cypress inbuilt commands which are easy to understand.
- Cypress also bundles with **jQuery** and inherits many jQuery methods for UI components identification.

## Cypress Architecture

Most testing tools (like Selenium) operate outside the browser and execute remote commands across the network. Cypress, however, directly operates inside the browser. In other words, **it is the browser that executes your test code**.

This unique architecture enables Cypress to:
- Listen to and modify browser behavior at runtime.
- Manipulate the DOM.
- Alter network requests and responses on the fly.

This opens the door to a **new kind of testing** with full control over your application—front and back.

## Cypress Browser Support

- Chrome
- Electron
- Firefox
- Internet Explorer

## Cypress Components

- **Test Runner**
- **Dashboard Service**

## Course Outcome

By the end of this course, you will be able to:
- Automate any web application using Cypress.
- Understand how Cypress builds non-flaky, stable automation tests using jQuery.
- Mock network requests and responses.
- Design a Cypress framework from scratch following best testing standards.
- Integrate Cypress Test Framework with Jenkins for CI/CD.

## Course Prerequisites

- None for 90% of lectures.
- Basic API knowledge is required for 10% of lectures (for API mocking topics).
- JavaScript basics are taught alongside Cypress concepts.

## Getting Started

1. Initialize npm project:
    ```bash
    npm init -y
    ```

2. Install Cypress:
    ```bash
    npm install cypress --save-dev
    ```

3. Open Cypress Test Runner:
    ```bash
    npx cypress open
    ```
