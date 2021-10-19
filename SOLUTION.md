# Choco Backend Interview Exercise

## The epic

Design a service that given a string with line breaks ("\n") and formatting parameters, returns a string formatted with basic markdown syntax.

## Requirements

### Functional Requirements

The service should be able to:

- Limit text to a specified line width.
- Align text to left, right and center within the specified line width.
- Set single or double line spacing.
- Given a list of words, turn them bold using markdown syntax. (ie. all **Choco** words in text should be made bold)
- Given a list of words, turn them italic using markdown syntax. (ie. all _food_ words in text should be made italic)
- Given a list of words and their substitutions, replace all occurrences of the specified words with their substitutions. (ie. replace every Choco with CHOCO and so on)
- Given a list of words, add a random Chuck Norris food fact after the paragraph where such words are found. (possible source https://api.chucknorris.io/)

### Contraints

- Use NodeJS, with TypeScript to code the service.
- Include unit tests

## Stories

From the functional requirements, Roger has indenfied three major topics:

1. Parameter processing
2. Searching and replacing words
3. Creating a formatted output

### Story # 1

To achieve optimium quality, users want to replace, underline and bold words simultaneously.

Solution: Build a Class of structured parameters from the original arguments.

### Story # 2

Users expect a quick response and no external dependencies on external modules.

Solution: Build a functional module for searching and replacing words based in the built-in regular expressions.

### Story # 3

To avoid security risk on external dependencies, users do not want to relay in 3rd party libraries for spacing and aligning the output document.

Solution: Build a functional module for formatting employing the built-in regular expressions, and string functions.
