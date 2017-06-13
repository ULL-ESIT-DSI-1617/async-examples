# Learning Asynchonous Programming in JS

This is a repo with my experiences learning Asynchronous Programming in JS, following tutorials I have found interesting. Thanks to the authors.


## Asynchronous Iterative & Recursive Patterns for Node.js - Part 1

* [Asynchronous Iterative & Recursive Patterns for Node.js - Part 1](https://mostafa-samir.github.io/async-iterative-patterns-pt1/)
* [Asynchronous Iterative & Recursive Patterns for Node.js - Part 2](https://mostafa-samir.github.io/async-recursive-patterns-pt2/)
* [npm: simple-barrier](https://www.npmjs.com/package/simple-barrier)
* [Async utilities for node and the browser http://caolan.github.io/async/](http://caolan.github.io/async/)
* [Mostafa-Samir.github.io/_posts/](https://github.com/Mostafa-Samir/Mostafa-Samir.github.io/tree/1dad950ce19a4b1bcd94eb78c7da6df4c6f529da/_posts)

### Problem #1

You’re given a list of paths to files on disk. Each file contains a number and you need to output the final summation of all these numbers.

- sol1.js : readSync
- sol1wrong.js: Erroneous solution
- sol1async.js  


## Problem #1.2

Problem #1 didn't impose any order on the processing of the list of paths, it doesn't matter which file will be read first because the addition's result will always be the same. Lets re-formulate it a little so that the order of processing matters and see what happens.

> You're given a list of paths to files on disk. Each file contains a number and you need to output one string which contains all the numbers read from the files in the order of the paths in the list. However, on each read you must wait a random time that ranges from 0-10 milliseconds before appending the read number to the string.

- sol12wrong.js
- sol12.js

## Problem. #1.3

Synchronize a repl loop in which the tasks to perform are asynchronous.

```
[~/javascript/async-examples/part1(master)]$ node loop.js 
> read first-file
Miracle, Outside!!
async result = 10

> result
10

> read second-file
async result = 7

> result
7
```

## Problem 2

You and your team are creating a module system for your little
organization (something that’s very similar to npm, but private to
your organization). 

The system should be able to load a module on
demand from a shared organization server. 

Each module can have at
most one other module as a dependency, and when a module is fetched,
its dependency and its dependency’s dependency (and so on ...) should
be fetched as well to ensure that the module will work correctly.

Your task now is to write a script that runs before downloading the
module that queries the metadata of the module on the server to
determine the list of all modules and dependencies that you’ll need
to download. 

All modules metadata reside on the route
`/meta/{module_name}`, and it should be retrieved using a `GET`
request. 

Each request returns a JSON response with at most two
fields: 

1. `hasDependency` that is true if the module has a dependency,
false otherwise; and 
2. `dependency` which contains the name of the
dependency module if exists.

In this [gist](https://gist.github.com/Mostafa-Samir/8d88882e223a43bbbdef) you'll find a sample node http server that you can run locally to mimic the behaviour of the shared organization server described in the problem. Just open the terminal in the containing folder and run it with `node server`. The server should then be accessible at **http://localhost:8080**.

### Reasoning about a Solution
The first step we could take to tackle this problem is to create a function that can load the metadata a single module from the server. 

This function (let's call it `loadMetaOf`) is very simple; it takes two arguments: 

1. the name of the module we want to load its metadata, and 
2. an array that represents the list of all modules that will need to be loaded. 

This function initiates a GET request to the server to retrieve the module's metadata and appends its name to the list when the response comes.

From the problem's description, it's obvious that we're gonna need to call this function many times to retrieve all the dependencies, but unfortunately we don't know how many times! 

This is because that we wouldn't know that we'll need to call the function with another module unless we get the response from the previous call and it indicated that there's a dependency that needs to be loaded. 

So we won't be able to use simple iterations like those we worked with in part 1.

A straightforward solution ,to our ignorance of how many times we're gonna need to call the function, is **recursion**. 

We can make our function recursive, so that it would call itself again if the response indicated a dependency, or return if no dependency is indicated.

