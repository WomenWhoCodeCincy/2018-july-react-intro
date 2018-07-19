# Step 0 - Prerequisites

Before we get started with React, we first need to install a few prerequisites.

- Node.js
  - https://nodejs.org/
  - This tutorial was written using Node v8.11.3 (LTS at the time of writing)
  - This tutorial was written using NPM v6.1.0 (run `npm --version` to see what version you have, and upgrade instructions if needed)
  - Use the installers available for download, or your package manager if you have one
- create-react-app
  - https://github.com/facebook/create-react-app
  - **To install:** After you install Node (which installs the `npm` command), run `npm install -g create-react-app` in your console. Installing the package globally (the `-g flag`) will let you run the `create-react-app` command from your console.
  - The `create-react-app` command allows you to build a complex React app without having to learn a wide range of technologies to build Javascript apps. You can focus just on learning React! From the `create-react-app` README, the project is driven by the philosophy:
    - One Dependency: There is just one build dependency. It uses Webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.
    - No Configuration Required: You don't need to configure anything. Reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.
    - No Lock-In: You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.
  - The README covers exactly what is included and why https://github.com/facebook/create-react-app#whats-included
