# Step 3 - Rendering a list of Todos

- [Part 1 - Building our first component](#part-1---building-our-first-component)
- [Part 2 - Using the component](#part-2---using-the-component)

## Part 1 - Building our first component

Before we start rendering a list of Todos, I want to pull out the todos into a component. This will help us focus on just this list when making our changes. To do this, we'll need to create our first component!

Create a file named `/src/Todos.js`, and add the following code.

#### `/src/Todos.js`

```jsx
import React, { Component } from 'react';

class Todos extends Component {
  render() {
    return (
      <div>
        Hello, World!
      </div>
    );
  }
}

export default Todos;

```

Let's break this down line by line.

### The import statement

```jsx
import React, { Component } from 'react';
```

This is ES6 syntax for importing code from another module. If you are familiar with Node.js, this is like a `require` statement. `create-react-app` already installed the `react` module for us from [NPM](https://www.npmjs.com/), so we can reference it by name.

The first import references `React`. Imports outside of curly brackets (these guys `{}`) give a reference to the default export of a module. In most cases, we can use whatever variable name we want here. But to use JSX, it is required that we have the React module in scope with the name `React`. Try renaming `React` in `src/App.js`, and you will see compiler errors.

The next import statement references `Component`. Things imported inside of curly brackets are named exports of the module. As this might imply, the name we use here must match the name that `react` exported. In this case, `Component` is a named export that is equal to `React.Component` that is provided for convenience. You will see most React developers use this import over the `React.Component` alternative.

### Defining the class

```jsx
class Todos extends Component {
  ...
}
```

The next code you see is the class definition. There are a few different ways to define React components, but the most basic way (and only way we will cover in this tutorial) is to make an ES6 class that extends `Component`. Here we have named our component `Todos`.

### The render function

```jsx
render() {
  return (
    <div>
      Hello, World!
    </div>
  );
}
```

Every React component must have a `render` function defined. Every `render` function is also expected to return `null`, a JSX fragment, or a Javascript string (like `"Hi!"`). To see what happens when you don't define a `render` function, rename `render` in `src/App.js` to `render1`. You should see this error in your browser:

```
TypeError: instance.render is not a function
```

To keep my app compiling as I develop, when I first create a component I return a simple placeholder `div` until I am ready to code.

### Exporting the component

```jsx
export default Todos;
```

The last statement in this file is exporting the component. We talked about how the `react` module has a default export, and this is the same thing! Each file in your app acts like its own little module, and this is how we declare a default export of our `Todos` class.

Alternatively, you may see a more compact syntax that has the export on the same line as the class declaration like this:

```jsx
export default class Todos extends Component {
  ...
}
```

This does exactly the same thing, and there is no significant benefit of using one version over the other. As a matter of habit and personal taste, I always use the separate export statement and that is what you will see in this tutorial.

[**Changes for Part 1** (dc98b65)](https://githb.com/WomenWhoCodeCincy/2018-july-react-intro/commit/dc98b650672b0e2f73d8f2b64c5517fbf79ccd3f)

## Part 2 - Using the component

Now, we have a component for just the list, but we need to use it in our app to be able to see our changes. To start, open up `/src/App.js` and import our component:

#### `/src/App.js`

```jsx
import React, { Component } from 'react';

import Todos from './Todos';

class App extends Component {
...
```

The `./` at the beginning of the import path denotes that we want to reference a local file instead of an installed module like `react`. Specifying the file extension is not required when importing local modules, Webpack will infer it for you.

Now that we have our component in scope, we will add it to the rendered content of the App component.

#### `/src/App.js`

```jsx
<section className="main">
  <input id="toggle-all" className="toggle-all" type="checkbox" />
  <label htmlFor="toggle-all">Mark all as complete</label>

  <Todos />
  <ul className="todo-list">
...
```

React components are used just like HTML tags. The way you can tell a React component apart from an HTML tag is that React components must start with a capital letter, otherwise JSX will not render your app correctly. You can read a little more about this here: https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized

After putting the `Todos` component in our app, you should see the "Hello, world!" text right above the list of todos. After this step, your app should look like this:

![](screenshots/step03--01.png)

[**Changes for Part 2** (e10f662)](https://github.com/WomenWhoCodeCincy/2018-july-react-intro/commit/e10f662f3f7215c18f8563747463aaa8830de739)

## Part 3 - Moving the HTML into our component



[**Changes for Part 3** (12d29a9)](https://github.com/WomenWhoCodeCincy/2018-july-react-intro/commit/12d29a96ae28618db1d1ef951fcab1b3e645631f)

## Part 4 - Rendering a list

## Part 5 - The `key` prop

## Part 6 - Rendering Todo text

## Part 7 - Rendering Todo completion state

## Part 8 - Making a Todo component
