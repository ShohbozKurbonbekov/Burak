// G-TASK:
// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
const getHighestIndex = function (arr: number[]): number {
  return arr.indexOf(Math.max(...arr));
};

console.log(getHighestIndex([5, 21, 12, 21, 8]));
console.log(getHighestIndex([5, 21, 12, 21, 56]));
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

// Design pattern: Decotar, MIDDLEWARE.

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

let myName: string = "John";
let age: number = 25;
let active: boolean = true;
const stage: number | string = "hello";

// Arrays
// To annotate an array type you use a specific type followed by a square bracket : type[] :
// let arrayName: type[];
let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];
// names = [29,45,56 ❌]

// OBJECTS
interface Person {
  firstName: string;
  lastName: string;
}

let person: Person = {
  firstName: "Daniel",
  lastName: "Radcliffe",
};

// CLASSES

class Student {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 28;
  }
}

const daniel = new Student("Daniel", "Radcliffe", 28);
