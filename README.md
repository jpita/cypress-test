[![Cypress Tests](https://github.com/jpita/cypress-test/actions/workflows/main.yml/badge.svg)](https://github.com/jpita/cypress-test/actions/workflows/main.yml)

# cypress-test

## Description

This project is a technical test using Cypress for automated testing.

## Installation

To install Cypress, follow these steps:

1. Clone this repository: `git clone https://github.com/jpita/cypress-test.git`
2. Navigate to the project directory: `cd cypress-test`
3. Install dependencies: `npm install`

## Running Tests

To run the tests, use the following command:

`npm test`

To see the tests running, open cypress with `npx cypress open` and click on the test you want to see.

## CI

This project is using GitHub Actions for CI. The workflow is defined in `.github/workflows/main.yml` and it runs the tests on every push to the repository.

The tests are failing on purpose since adding a new computer is not working as expected. The test is failing because the computer is not being added to the list.
