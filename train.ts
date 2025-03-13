// G-TASK:
// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// const getHighestIndex = function (arr: number[]): number {
//   return arr.indexOf(Math.max(...arr));
// };

// console.log(getHighestIndex([5, 21, 12, 21, 8]));
// console.log(getHighestIndex([5, 21, 12, 21, 56]));
// 🟩  COMPILED AND INTERPRETED LANGUAGES
// Compiled languages are transformed into machine code before execution, while interpreted languages are executed directly from source code by an interpreter. Here are some key differences:

//                      Compilation vs. Interpretation:
// ✨ Compiled Languages: A compiler translates the entire source code into machine code (or an intermediate form) before the program runs. This results in an executable that the computer can run directly.
//✨ Interpreted Languages: An interpreter reads and executes the source code line by line at runtime. There’s no separate compilation step that produces a standalone executable.

// 1️⃣ Performance
// Compiled Languages: Typically offer faster execution times because the code is optimized and translated into native machine code ahead of time.

// Interpreted Languages: Often run slower since the interpreter translates code on the fly, which adds overhead.

// 2️⃣ Portability
// Compiled Languages: The executable is often platform-specific, meaning you might need to recompile the code for different operating systems or hardware architectures.

// Interpreted Languages: Since the interpreter handles execution, the same source code can often run on any platform that has a compatible interpreter.

//3️⃣ Development and Debugging
// Compiled Languages: Errors are usually caught during the compilation phase, which can help catch issues early but might slow down the edit-compile-run cycle.

// Interpreted Languages: Typically allow for quicker testing and debugging because you can run the code immediately without a separate compilation step.

//4️⃣ Examples
// Compiled Languages: C, C++, and Rust.

// Interpreted Languages: Python, Ruby, and JavaScript.

//5️⃣ Hybrid Approaches: Languages like Java and C# are compiled to an intermediate bytecode, which is then run on a virtual machine (and may use just-in-time compilation) to combine some benefits of both approaches.

// TYPESCRIPT
// TypeScript is an open-source programming language developed and maintained by Microsoft. It’s essentially a superset of JavaScript that adds optional static typing and other modern features, which helps improve code quality and maintainability in larger projects.

// 1️⃣ Optional Static Typing.
//TypeScript lets you specify types (e.g., string, number, boolean) for variables, function parameters, and return values. This helps catch potential errors during development rather than at runtime.

// 2️⃣Enhanced Code Readability and Maintainability.
// With features like interfaces, generics, and advanced type inference, TypeScript makes it easier to understand complex codebases and refactor code safely.

// 3️⃣ Compiles to JavaScript:
// The TypeScript compiler converts TypeScript code into plain JavaScript, ensuring that it runs on any platform that supports JavaScript—whether it’s browsers, Node.js, or other JavaScript engines.

// 4️⃣ Better Tooling and Developer Experience.
// Many modern code editors (like Visual Studio Code) offer excellent TypeScript support with features such as autocompletion, inline documentation, and advanced refactoring tools, thanks to its rich type system.

//               ARCHITECTURAL AND DESIGN PATTERNS
// har ikkala backend ham frontend ham architectural va design pattern lar ustiga qurilgan bo'ladi. Backendimiz MVC va Dependency injection ga, frond endimiz esa MVP architectural pattern ga qurilgan bo'ladi.

//Architectrual pattern: MVC (MODEL VIEW CONTROLLER), DI (DEPENDENCY INJECTION), MVP.

// Design pattern: Decorator, MIDDLEWARE.

// let variableName: type;
//let variableName: type = value;
//const constantName: type = value;
// In this syntax, the type annotation comes after the variable or constant name and is preceded by a colon (:).

// NUMBER
// The following example uses number annotation for a variable:
let counter: number;
// After this, you can only assign a number to the counter variable:
counter = 45;

// If you assign a string to the counter variable, you’ll get an error
// counter = 'Hello'; // compile error

// let myName: string = "John";
// let age: number = 25;
// let active: boolean = true;
// const stage: number | string = "hello";

// Arrays
// To annotate an array type you use a specific type followed by a square bracket : type[] :
// let arrayName: type[];
let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];
// names = [29,45,56 ❌]

// OBJECTS
// interface Person {
//   firstName: string;
//   lastName: string;
// }

// let person: Person = {
//   firstName: "Daniel",
//   lastName: "Radcliffe",
// };

// CLASSES

// class Student {
//   firstName;
//   lastName;
//   age;

//   constructor(firstName: string, lastName: string, age: number) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age
//   }
// }

// const daniel = new Student("Daniel", "Radcliffe", 28);

//                            🟩 Environmetal Variables.
// ✨ - npm install "dotenv" - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. - config() will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content or an error key if it failed.

// 1️⃣ - environmental variable (or environment variable) is a key-value pair stored in the operating system that can be used to configure your application's behavior without changing its code.

// 2️⃣ -  Example Use Case.
// const dbPassword = "mySuperSecretPassword"; // ❌ not good
//const dbPassword = process.env.DB_PASSWORD; // ✅ better

// 3️⃣ - Why Use Environment Variables?
// Security: Keep secrets (like API keys or DB passwords) out of your code.
// Flexibility: Change settings (e.g., between dev, test, and production) without modifying the app.
// Portability: Same codebase can behave differently in different environments.
// 4️⃣ - if there is an error with "can not find process", just write npm install --save-dev @types/node in the prompt command - This package tells TypeScript about built-in Node.js globals like process, __dirname, etc

// ✨ - Clustor => Database => collection => document => dataset.
//✨ - git reset --hard is a powerful Git command that resets your working directory, staging area, and current branch to a specified commit — and it discards all changes.
// It's like saying: “Forget all my changes, go back to this exact commit — and make it as if my recent work never happened.”

// 🟩 - Mongoose
// Mongoose is an Object Data Modeling (ODM) library designed for Node.js and MongoDB. It provides a straightforward, schema-based solution to model your application data, offering a layer of abstraction over the native MongoDB driver.
// 1️⃣ @types/express@4.17.3:
//                  What is @types/express?
// It provides TypeScript type definitions for Express. It's part of the DefinitelyTyped project, which maintains type declarations for many JavaScript libraries that don’t come with built-in TypeScript support. When you install @types/express, you're telling TypeScript what the types of all the Express functions, classes, and objects are — so TypeScript can give you auto-complete, type checking, and better error detection.
