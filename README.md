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

You can download the artifacts (videos and screenshots) of the tests in the Actions tab of the repository inside each build.
![artifacts screenshot](artifacts.png?raw=true)

## Improvements

### Page Object Model

I would add page object model to the tests to make them more readable and maintainable. This would allow us to separate the selectors and the actions on the page.

### Test Cases to be added

- check pagination
- open details page
- edit and save changes to computer
- edit and discard changes to computer
- delete computer

## Bugs found

- every post call to `/computers` gives a 303 status code on changes to the information (create, edit, delete), so no calls work when we try to make changes to the data in the app
- when I try to add a new computer with an invalid date I get this UI error
  ![error screenshot](UI-errors.png?raw=true)

## Thoughts

This was a fun exercise to do since I love working with Cypress.

Instead of spending more time improve the test code (adding POM), I decided to make it simple but effective and focus on the CI part.
Both ways are valid, but I think that the CI part is more important for this exercise to show case how a project should be setup to run tests on every push to the repository.

When I join a team of QAs to build a test suite, I always start with the CI part to make sure that the tests are running on every push to the repository. This way we can catch bugs early and make sure that the tests are always running.

Next I would spend time improving the test code and adding more test cases to cover the whole application and training the other QAs to write tests and good test code.
