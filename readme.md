
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# Extendable HTML, CSS/SCSS, JS/TS project - Boilerplate

It is my attempt to create an ecological "project template" starter kit to gain time and contribute to save the planet.

I want to have an easily customizable and extendable structure for adapting it to the final project.




#
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

[![GitHub license](https://badgen.net/github/license/USERNAME/REPOSITORY)](https://github.com//USERNAME/REPOSITORY/blob/master/LICENSE)

[![GitHub stars](https://badgen.net/github/stars/USERNAME/REPOSITORY)](https://GitHub.com/USERNAME/REPOSITORY/stargazers/)

[![Github all releases](https://img.shields.io/github/downloads/USERNAME/REPOSITORY/total.svg)](https://GitHub.com//USERNAME/REPOSITORY/releases/)

[![GitHub forks](https://img.shields.io/github/forks/USERNAME/REPOSITORY.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/USERNAME/REPOSITORY)

[![GitHub contributors](https://img.shields.io/github/contributors/USERNAME/badges.svg)](https://GitHub.com/Naereen/badges/graphs/contributors/)

[![GitHub issues](https://badgen.net/github/issues/USERNAME/REPOSITORY/)](https://GitHub.com/USERNAME/REPOSITORY/issues/)

[![GitHub issues-open](https://badgen.net/github/open-issues/USERNAME/REPOSITORY)](https://github.com/USERNAME/REPOSITORY/issues?q=is%3Aopen)

[![Issues](https://img.shields.io/github/issues-raw/tterb/PlayMusic.svg?maxAge=25000)](https://github.com/USERNAME/REPOSITORY/issues)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![GitHub total-pull-requests](https://badgen.net/github/prs/USERNAME/REPOSITORY)](https://GitHub.com/USERNAME/REPOSITORY/pull/)

[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/USERNAME)

## Technos
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Tools
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

![SonarLint](https://img.shields.io/badge/SonarLint-CB2029?style=for-the-badge&logo=SONARLINT&logoColor=white)



## License

[MIT](https://choosealicense.com/licenses/mit/)
### Features

- Use Husky for automatically run Lint and Tests when commiting and pushing on git repository

## Roadmap

- Additional browser support

- Add more integrations


## Feedback

If you have any feedback, please reach out to us at fake@fake.com


## Contributing

This project follows the [all-contributors](https://allcontributors.org) specification.

Contributions of any kind are always welcome!
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
├── src
    ├── applications          - Endpoints backend or frontend
    |   └── webAPI            - Entreprise buisness rules
    |       ├── interfaces      - Interfaces and classes complement the app.
    |       └── {feat-name}     - Business features    
    |       └── build           - Compiled files
    ├── domain                - Interfaces adapters
    └── infrasctuctures       - Frameworks and drivers that exposes the app

```


### Getting started

#### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

- Install [Node.js and NPM](https://nodejs.org/en/download/)
    - on OSX use [homebrew](http://brew.sh) `brew install node`
    - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

- Install Yarn as package manager
  ```bash
  $ npm i -G yarn
  ```

#### Step 2:Install the project

- Clone project
  ```bash
    git clone https://link-to-project
  ```

  Go to the project directory

  ```bash
    cd my-project
  ```
- Install dependencies:
   ```bash
   $ yarn install
   ```

#### Step 3: Set up the Environment Variables

To run this project, you will need to add the following environment variables to your .env file in `applications\webAPI\config\environment`

`PORT` : The listen port of the web server

`ANOTHER_API_KEY`

### Running script
- Start developpement server
  ```bash
    $ pnpm dev
  ```
  The server address will be displayed to you as `http://0.0.0.0:8080`

- Build application
  ```bash
    $ pnpm build
  ```
- Lint the code
  ```bash
    $ pnpm lint:scss
    $ pnpm lint:js
  ```
- Run tests
  ```bash
    $ pnpm test
  ```    
### Routes

Here are server routes :
## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## How to code, news features

## Used By

This project is used by the following companies:

- Company 1
- Company 2