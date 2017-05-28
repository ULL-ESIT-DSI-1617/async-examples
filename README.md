## Asynchronous Iterative & Recursive Patterns for Node.js - Part 1

* [Asynchronous Iterative & Recursive Patterns for Node.js - Part 1](https://mostafa-samir.github.io/async-iterative-patterns-pt1/)
* [Asynchronous Iterative & Recursive Patterns for Node.js - Part 2](https://mostafa-samir.github.io/async-recursive-patterns-pt2/)
* [npm: simple-barrier](https://www.npmjs.com/package/simple-barrier)
* [Async utilities for node and the browser http://caolan.github.io/async/](http://caolan.github.io/async/)

### Problem #1

You’re given a list of paths to files on disk. Each file contains a number and you need to output the final summation of all these numbers.



## Problem #1.2

Problem #1 didn't impose any order on the processing of the list of paths, it doesn't matter which file will be read first because the addition's result will always be the same. Lets re-formulate it a little so that the order of processing matters and see what happens.

> You're given a list of paths to files on disk. Each file contains a number and you need to output one string which contains all the numbers read form the files in the order of the paths in the list. However, on each read you must wait a random time that ranges from 0-10 milliseconds before appending the read number to the string.

