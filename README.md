# React Vite + InversifyJS

## Application URL
[https://vite-inversifyjs.pages.dev/](https://vite-inversifyjs.pages.dev/)

## Time Spent
6 hours in total
- UI coding + logic implementation: 4 hours
- Refactoring with InversifyJS: 2 hours

## Features
### Directory Structure
This project is mainly based on [bulletproof react](https://github.com/alan2207/bulletproof-react/tree/master/apps/react-vite). 

A `features` directory is created to separate concerns by functionality, which improves code organisation and maintainability.

I usually adopt this structure because
- By organising code according to concerns, the codebase stays manageable and won't be overly complex.
- It makes adding or deleting features easy, and when a destructive change occurs, it helps minimise its impact on the application.

### Biome
[Biome](https://biomejs.dev/)

As a code formatting tool, I used Biome instead of ESLint and Prettier.
Compare to ESlint, Biome has a much simpler configuration.  To speed up the development I adopted Biome and I believe that it's more suitable for small projects.

### UI Library (shadcn/ui)
To build a polished and accessible application quickly, this project uses [shadcn/ui](https://ui.shadcn.com/).

This library is built on Tailwind CSS and provides a wide range of commonly used UI components essential for building modern web applications.

Since it generates components directly into the project directory, we don’t need to worry about library updates, and customisation is easy both in terms of appearance and functionality.