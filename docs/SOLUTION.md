# Roger Mori's Solution made with Love

## Dictionary

- Requirement "Strings" in parameters mean design "Words"

## Added Non functional Requirements

- Words must have at least two characters.
- A valid text file feeds the system to handle significant texts.
- Use native Node' modules as much as possible.
- Left alignment does not add trailing white spaces.
- Use NodeJS with TypeScript to code the service.
- No in-depth parameter validation was included.

## Topics

From the requirement, Roger has identified three major topics:

1. Parameter processing
2. Searching and replacing words with markup
3. Formatting output

## Stories

Section for iterative development and new requirements discovery.

### Story # 1

To achieve optimum quality, users want to replace, underline, and bold words simultaneously.

Solution: Build a Class's module of structured parameters from the original arguments.

### Story # 2

Build a functional module for searching and replacing words based on the built-in regular expressions.

### Story # 3

Build a functional module for formatting employing the built-in regular expressions and string functions.

### Story # 4

Build a functional module to fetch Chuck Norris's random words

### Story # 6

Users do not want to memorize the command line arguments and feed the system with a large text file.

Solution: Build a simple command-line interface to read and validate input parameters.

## Features

The system outputs to "screen" or "file" or "both."

## Usage

### Pre Requisites

- NodeJS 14+

### Installation

```
 1. https://github.com/choco-hire/Roger-backend-exercise
 2. npm install
```

#### Running the application

Change directory to the application's directory. Then execute one of the following commands.

```
 1. npm dev     // development
 2. npm start   // production
 3. npm test    // test
```

## 📁 Directory Structure

```
——————
  | -- data                      // input and output default directory
  | -- docs                      // documents directory
  | -- dist                      // Typescript output directory
  | -- src                       // source code
      | -- config                // system configuration
      | -- index.ts              // entry point and similar core files
      | -- lib                   // utility functions and classes
      | -- __tests__             // test directory

```
