# Dynamic survey
- React, Redux, Saga, ES6/7
- Atomic Design
- Jest, Enzyme
- ESLint

## Steps to run
1. Clone the repository.
2. Run `npm install`. (requires NodeJS latest version to be installed on system)
3. Run `npm start`.
4. Open `localhost:3000` in browser.
5. Run `npm run test` to run all test cases in watch mode.
6. Run `npm run test:coverage` to see test case code coverage report.
7. Run `npm run eslint` to run eslint and fix possible lint issues.


## Features
### Implemeted :
- one of the following input types to answer the question :
  - Text input field.
  - Dropdown (several options, one selectable).
  - Radio buttons (multiple inputs, one selectable).
- Back button to go to the previous page of the journey (if not on first page).
- Next button to go to the next page of the journey (if not on summary / last page).
  - The button should be disabled if no input is given yet for the current page.
- The last page shows a summary of all questions with answers.
- BONUS:​ A progress indicator bar.
- BONUS: ​When closing the browser window and reopening it, the progress with its  data is restored.
- BONUS: ESLint configured for code quality check.
- BONUS: Unit test cases.
- Responsive UI.

### Not Implemeted :
- The survey can be browsed using the native browser back / next button  

## Application folder structure
```
public/ (static files)
src/
  /actions/              (redux actions creators and action types)
    /tests/              (test cases)
  /api/                  (dummy api functions)
    /tests/              (test cases)
  /components/           (react component liabrary)
    /atoms/              (atom components)
      /ComponentName/
        /tests/          (test cases)
        index.js         (react component)
      ...
    /molecules/          (molecule components)
      /ComponentName/
        /tests/          (test cases)
        index.js         (react component)
      ...
    /organisms/          (organism components)
      /ComponentName/
        /tests/          (test cases)
        index.js         (react component)
      ...
    /templates/          (template components)
      /ComponentName/
        /tests/          (test cases)
        index.js         (react component)
      ...
    /pages/              (page components)
      /ComponentName/
        /tests/          (test cases)
        index.js         (react component)
      ...
  /reducers/             (redux reducer functions)
    /tests/              (test cases)
    index.js
    ...
  /sagas/                (side effects middleware functions)
    /tests/              (test cases)
    index.js
    ...
  /store/               (redux store configuration)
    index.js
  /utils/               (utility functions)
    ...
```
## Application data structure

Redux store shape :
```
{
  questions: {
    byId: {
      quesId1: {
        id: 'quesId1',
        text: '',
        options: [],
        answer: '',
      },
      ...
    },
    allIds: ['quesId1', ...],
    currQuesIndex: 0,
  },
  userAnswer: '',
}
```

User data shape stored in local storage :
```
{
  answers: {
    quesId1: 'answer',
    quesId2: 'answer',
    ...
  },
  currQuesIndex: 0,
}
```

--------------------------------------------
--------------------------------------------
--------------------------------------------
--------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).