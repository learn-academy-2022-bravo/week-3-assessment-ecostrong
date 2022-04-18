# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: I have used this while working with react, to invoke a function.

  Researched answer: The keyword `this` is simply an object which is executing the current piece of code.
   When an object of a function is created using the 'this', that "this will point to that particular object.
   If the function is a regular function than 'this' will refer to a global object.
   If the function is a method in an object, then it will refer to the object itself.


2. What is React? Why would you use it?

  Your answer: React is a program that implements javascript, html, and css files. You can use it to build a website.
  We are currently using React to build websites that have functional applications in class.
  Researched answer:
React is a JavaScript Library for building user interfaces and is used to build single-page applications.
React allows for the creation of reusable UI components. It is free and open source and it can be used to create
single-page, mobile, or server-rendered application with frameworks.


3. Which lifecycle method is required in a React class component?

  Your answer: I am not sure.

  Researched answer: The render () method is a React class component lifecycle, which determines what is rendered in the
  browser. It runs automatically anytime the view updates. Render is a built in methods called lifecycle methods.



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: We use JSX in React.

  Researched answer:JSX is flavored HTML that behaves like HTML but uses the syntax className, instead of HTML's
  class. JSX is a building block of React.
  ie class HelloReact extends React.Component{


5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: We use Yarn in the terminal, and it downloads a package of files.

  Researched answer:  Yarn is a package of files that we use to run React. It is used for Node.js, in the terminal and
  installs a library that are always the same. To create a new application we use the command yarn create-react app, followed by the name
  of the application. So if application is called myapp, then the directory will be myapp. This creates a new directory and installs all the files in the new directory.


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: I would assume it is anonymous and unknown.  

  Researched answer: An anonymous function does not have a name defined, so it is not usually accessible after its creation.
  Anonymous functions are used to pass an anonymous function to other function as its argument.
  Or an anonymous function can be an argument for another function.

  For example per WikiBooks:

  Normal function definition:

function hello() {
  alert('Hello world');
}
hello();

Anonymous function definition:

var anon = function() {
  alert('I am anonymous');
}
anon();


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Is the ability to render different user interface UI markup if a condition is true or false.
In React is can render different elements or components based on a condition. It uses operators like "if" or the
 JavaScript logical && operator.

2. Object-oriented programming: Or OOP is a programming style that designs code to function like objects in the real worlds. It can create containers that can be changed or manipulated without effecting the rest of the entire program.
It organized software design around data, or objects, rather than functions and logic. The structure are Classes, Objects, Methods,
and Attributes. The main principles are encapulations, abstractions, inheritance, and polymorphisim.


3. Ruby: Ruby is an object oriented programming language. It is an open source, general purpose dynamic server-side scripting language.
It is simple and easy to read and write. Ruby comes preinstalled on Mac computers.

4. Ruby blocks: Are anonymous functions that can be past on to functions. The blocks are enclosed in curly braces or do end statements and can
have multiple arguments.

Example from rubyguides.com

# Form 1: recommended for single line blocks
[1, 2, 3].each { |num| puts num }
                 ^^^^^ ^^^^^^^^
                 block   block
               arguments body


# Form 2: recommended for multi-line blocks
[1, 2, 3].each do |num|
  puts num
end

5. Ruby hashes: A hashes is a bit like an array but the values are referenced by unique key. 
A hash is a collection of unique keys and their values. It is a container of data.
