
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# Extendable HTML, CSS/SCSS, JS/TS project - Boilerplate

It is my attempt to create an ecological "project template" starter kit to gain time and contribute to save the planet.

I want to have an easily customizable and extendable structure for adapting it to the final project.

## YOUR TODO:

_MODIFY THIS README TO FIT YOUR PROJECT_
- _Replace url in the badges with your own username and repository name when it's needed_

---

## Stats


[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) [![HitCount](https://hits.dwyl.com/jdelauney/swing-project-template.svg)](https://hits.dwyl.com/jdelauney/swing-project-template) [![GitHub license](https://badgen.net/github/license/jdelauney/swing-project-template)](https://github.com//jdelauney/swing-project-template/blob/master/LICENSE) [![GitHub stars](https://badgen.net/github/stars/jdelauney/swing-project-template)](https://GitHub.com/jdelauney/swing-project-template/stargazers/) [![Github all releases](https://img.shields.io/github/downloads/jdelauney/swing-project-template/total.svg)](https://GitHub.com//jdelauney/swing-project-template/releases/) [![GitHub forks](https://img.shields.io/github/forks/jdelauney/swing-project-template.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/jdelauney/swing-project-template)


[![GitHub issues](https://badgen.net/github/issues/jdelauney/swing-project-template/)](https://GitHub.com/jdelauney/swing-project-template/issues/) [![GitHub issues-open](https://badgen.net/github/open-issues/jdelauney/swing-project-template)](https://github.com/jdelauney/swing-project-template/issues?q=is%3Aopen) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub total-pull-requests](https://badgen.net/github/prs/jdelauney/swing-project-template)](https://GitHub.com/jdelauney/swing-project-template/pull/) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/jdelauney)

---
## Technos

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---
## Tools
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![SonarLint](https://img.shields.io/badge/SonarLint-CB2029?style=for-the-badge&logo=SONARLINT&logoColor=white)


## License

[MIT](https://choosealicense.com/licenses/mit/)
### Features

- Use PNPM for package manager
- Use Vite for bundler
- Use SASS for styling
- Use TypeScript for typing (optional, but ready to use)
- Use Husky and Lint-staged for automatically run Lint when commiting and run Tests when pushing on git repository
- Use Vitest for testing
- Use ESLint for linting javascript/typescript and json
- Use Prettier for formatting
- Use SonarLint for linting
- Use GitHub Actions for CI/CD
- Use GitHub Dependabot for updating dependencies


## Roadmap

- Add more pre commit actions


## Feedback

If you have any feedback, please reach out to us at fake@fake.com


## Contributing

This project follows the [all-contributors](https://allcontributors.org) specification.

Contributions of any kind are always welcome!

### How to code, news features, fix issues

- Create a new branch from `main` branch
- Create a new folder with the name of the feature
- Create a new file with the name of the feature
- Write your code
- Commit and push your code
- Create a pull request to merge your branch with `main` branch
- Wait for the review and merge
- Delete your branch
- Enjoy !
-
see [CONTRIBUTING.md](https://github.com/jdelauney/swing-project-template/.github/CONTRIBUTING.md) for more details

### Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


## Documentation


### Project structure
```
.
├── .github             - GitHub files
├── .husky              - Husky files
├── .sonarlint          - SonarLint files
├── node_modules        - Node modules
├── dist                - Folder for the build
├── reports             - Folder for logs and reports
├── src                 - Endpoint for a static web page
    ├── assets          - Assets files : images, fonts, etc.   
    ├── scripts         - JavaScript files
    └── styles          - CSS/SCSS files
          ├── css  
          └── scss  
```

### Getting started

#### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

- Install [Node.js and NPM](https://nodejs.org/en/download/)
    - on OSX use [homebrew](http://brew.sh) `brew install node`
    - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

- Install Pnpm as package manager
  ```bash
  $ npm i -G pnpm
  ```

#### Step 2:Install the project

- Clone project
  ```bash
    git clone https://LINK_TO_GITHB
  ```

  Go to the project directory

  ```bash
    cd my-project
  ```
- Install dependencies:
   ```bash
   $ pnpm install
   ```

#### Step 3: Set up the Environment Variables

Nothing to do, at the moment

### Running script
- Start development server
  ```bash
    $ pnpm dev
  ```
  The server address will be displayed to you as `http://localhost:3000`

- Build application
  ```bash
    $ pnpm build
  ```
- Lint the code
  ```bash
    $ pnpm lint
  ```
- Lint the code with SonarLint
  ```bash
    $ pnpm sonarlint
  ```  

- Run tests
  ```bash
    $ pnpm test
  ```  

- Run tests coverage
  ```bash
    $ pnpm test:coverage
  ``` 

- Launch Vitest-UI
  ```bash
    $ pnpm test:ui
  ```     

### Routes

Here are server routes : _no routes at the moment_

## Usage/Examples

```javascript

```
 

## Used By

This project is used by the following users/companies:

## 😂 Here is a random joke that'll make you laugh!
![Jokes Card](https://readme-jokes.vercel.app/api)