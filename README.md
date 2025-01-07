<p align="left">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/felahgs/tractian-frontend">

  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/felahgs/tractian-frontend">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

</p>
<h1 align="center">
  Tractian Front-End Challenge
</h1>

<p align="center">
 <a href="#-about">About</a> •
 <a href="#%EF%B8%8F-features">Features</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-installing-and-running">Installing</a> • 
 <a href="#-libraries">Libraries</a> • 
 <a href="#-deploy">Deploy</a> • 
 <a href="#-scripts">Scripts</a> 
</p>

## 💻 About

**Front-end Challenge from [Tractian](https://github.com/tractian/challenges/tree/main/front-end)**  

The goal of this challenge was to implement an asset manager page based on location and sub components. There can be a excessive number of assets and performance is a critical issue.  

The development was done using [React](https://react.dev/), [NextJS](https://nextjs.org/docs) and [TypeScript](https://www.typescriptlang.org/).

Code quality tools such as [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) were also set up, along with [Husky](https://typicode.github.io/husky/#/) for pre-commit and pre-push checking for vulnerable versions, formatting rules, packages versions and tests consistences. 
Commits are also stricted using the [semantic-comit rules](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716).  

The project includes [Storybook](https://storybook.js.org/) for inspecting each component in the application and understanding how they function.  

The functional page can be accessed at: [https://tractian-frontend-orcin.vercel.app](https://tractian-frontend-orcin.vercel.app/)

---

## ⚙️ Features

**Asset Page**

- The Asset page consists in two man components side to side displaying a tree of assets classified by its Location > Assets > Components. The right panel shows the information of the selected Asset.
- **Sub-Features:**
    1. **Visualization**
        - Present a dynamic tree structure displaying components, assets, and locations.
          
     ```
    - Root
      |
      └── Location A
      |     |
      |     ├── Asset 1
      |     |     ├── Component A1
      |     |     ├── Component A2
      |     |
      |     ├── Asset 2
      |           ├── Component B1
      |           ├── Component B2
      |
      ├── Location B
      |     ├── Location C
      |     |     |
      |     |     ├── Asset 3
      |     |     |     ├── Component C1
      |     |     |     ├── Component C2
      |     |     |
      |     |     ├── Component D1
      |
      └── Component X
    ```
    2. **Filters**
        
        **Text Search**
        - Text search input.
        - Users can search for specific components/assets/locations within the asset hierarchy. The tree will be filtered showing the entire path for the nodes matching the searched string and all its descendants
        
        **Energy Sensors**
        - Button toggle
        - Filter the paths for all sensors of type "energy".
        
        **Critical Sensor Status**
        - Button toggle
        - Filter the paths for all senors in critical state. Identified by an red icon.

---

## 🎨 Layout

https://github.com/user-attachments/assets/5ea2cc3e-66f6-44cf-b40a-f99ca8777022

---

## 🚗 Installing and Running

### Pre-requisites

First of all be certain to have the following applications installed.
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable).

#### ▶️ Rodando a aplicação (servidor)

```bash

# Clone repository
$ git clone git@github.com:felahgs/tractian-frontend.git

# Access the application folder
$ cd tractian-frontend

# Install dependencies
$ yarn install

# Start the application
$ yarn dev

# A aplicação será aberta por padrão na porta:3000 - acesse http://localhost:3000
```

#### 🧭 Starting Storybook


```bash

$ git clone git@github.com:felahgs/tractian-frontend.git

$ cd tractian-frontend

$ yarn install

$ yarn run storybook

# The application will be accessible from  http://localhost:6006/

```

---

## 📚 Libraries

- [Jest](https://jestjs.io/pt-BR/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) Creation of unity tests.
- [axios](https://axios-http.com/ptbr/docs/intro)  HTTP Client.
- [sass](https://sass-lang.com/)  Styling.
- [clsx](https://www.npmjs.com/package/clsx)  Class name constructors
- [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack)  SVG components configuration.
- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce)  Adding debounce features.
- [floating-ui](https://floating-ui.com/docs/uselistnavigation)  Adding control and more control accessibility to menus.

  ***

## 🚀 Deploy

The deploy is made using the versel application for commits made into the main branch.

## 📜 Scripts

The scripts can be executed using the command `yarn [script name]`.  
The following scripts are configured in the project:

- **dev**: Starts the application in development mode at "http://localhost:3000".
- **build**: Builds the script for deployment.
- **start**: Starts an application in production mode at "http://localhost:3000".
- **lint**: Runs lint tests on the project and outputs files with code standard errors.
- **tsc**: Checks the type definitions across the codebase and outputs files with incorrect typings.
- **prepare**: Sets up pre-hooks for Husky.
- **test**: Run tests with coverage.
- **storybook**: Starts Storybook at "http://localhost:6000".
- **build-storybook**: Builds Storybook for deployment.
- **check-outdated**: Check if every package used in production is updated.

---

## 🔨 Further improvements

There are some improvements to be made:

- Render only visible tree elements improving performance
- Add responsivity
- Increase code coverage
- Allow tree items to be navigated using arrows and switching content with tab

---

## 🐹 Author

<a href="https://https://github.com/felahgs">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/felahgs" width="100px;" alt=""/>
 <br />
 <b>Felipe Souza</b></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe-garcia-de-souza-aa9aa773/)](https://www.linkedin.com/in/felipe-garcia-de-souza-aa9aa773/)
[![Gmail Badge](https://img.shields.io/badge/-fgsouza93@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:fgsouza93@gmail.com)](mailto:fgsouza93@gmail.com)

---
