# IT313 Components and JSX

## Problem

This project displays the IT313 student roster using
reusable React Native components and JSX.

Each student card shows the student's name, course,
and units enrolled. The Full Load label appears only
when the student's isFullLoad property is true.

## Component Structure

- App.js: Main entry point of the application.
- StudentRoster.js: Holds the student data, calculates
  the student count, maps the list, and tests React keys.
- StudentCard.js: Reusable component that displays
  student information using destructured props.

## React Concepts Used

- Functional components
- Props and destructuring
- JSX expressions
- Conditional rendering using &&
- Rendering lists using map()
- Stable keys using student.id
- State using useState
- Reversing the roster

## How to Run

1. Install Node.js and npm.
2. Open the project folder in VS Code.
3. Run npm install if needed.
4. Run npx expo start.
5. Open the app using Expo Go or an emulator.