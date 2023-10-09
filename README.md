[![npm version](https://badge.fury.io/js/@arijitdn%2Ftask-repeater.svg)](https://badge.fury.io/js/@arijitdn%2Ftask-repeater)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Task Repeater

> A promise based tool which will repeat your tasks a defined amount of times

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Task Repeater](#task-repeater)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Example 1](#example-1)
    - [Example 2](#example-2)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/arijitdn/task-repeater.git
$ cd task-repeater
```

To install and set up the library, run:

```sh
$ npm install @arijitdn/task-repeater
```

Or if you prefer using Yarn:

```sh
$ yarn add @arijitdn/task-repeater
```

## Usage

### Example 1:

```js
const { repeatTask } = require("@arijitdn/task-repeater");

const n = 10;
function task() {
  console.log("Hello World\n");
}

repeatTask(task, n);
```

### Example 2:

```js
const { repeatTask } = require("@arijitdn/task-repeater");

repeatTask(() => {
  console.log("Hello World\n");
}, 10);
```

## Built With

- NodeJS

## Authors

- **Arijit Debnath** - _Developer_ - [Arijit Debnath](https://github.com/arijitdn)

## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) © Arijit Debnath
