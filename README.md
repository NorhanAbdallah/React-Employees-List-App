## Workmotion's frontend challenge

simple employees list project written in react, typescript.


## Running Instructions

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/employees](http://localhost:3000/employees) to view homePage it in the browser.

## Project Structure
```
├── adapters  // adapters layer
│   └── rest  //rest adapter to integrate with endpoints
│       └── index.ts
├── apis  // api's layer
│   └── employees.ts // employees apis (list, update,..)
├── App.tsx
├── core // project functionalities layer between endpoints and views
│   ├── service // each module functionality
│   │   └── employees.tsx 
│   └── store //each module store using (redux)
│       ├── employeesSlice.ts
│       └── employeesStore.ts
├── index.tsx
├── models //each project model's types
│   ├── applications.ts
│   ├── employee.ts
│   └── list.ts
├── react-app-env.d.ts
├── router //project's routes
│   ├── index.tsx
│   └── paths.ts
├── shared // shared componenst/assets across project
│   ├── assets
│   │   └── logo-workmotion.svg
│   └── components
│       ├── navBar
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── snackBar
│       │   ├── index.tsx
│       │   └── types.ts
│       └── states
│           ├── index.tsx
│           ├── styles.ts
│           └── types.ts
├── theme // project's themes
│   ├── index.tsx
│   └── theme.ts
└── view // views layer that contains all each module view layer 
    ├── employees-list
    │   ├── index.tsx
    │   ├── styles.ts
    │   ├── useEmployeesList.ts
    │   └── wrapper.tsx
    └── index.tsx
```
## Libraries used

- react
- react-redux
- react-router
- typscript
- axios
- material-ui
- ts-enum-util
- clsx
- eslint

## Server

used [mockApi](https://mockapi.io/) to mock employees data

