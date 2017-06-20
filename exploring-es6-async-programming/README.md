### Index of the Asynchronous Programming Chapter of the book "Exploring ES6"

* [24. Asynchronous programming (background)](http://exploringjs.com/es6/ch_async.html)
<ol>
  <li> <a href="http://exploringjs.com/es6/ch_async.html#sec_javascript-call-stack"><span class="section-number"> </span>The JavaScript call stack</a> </li>
  <li> <a href="http://exploringjs.com/es6/ch_async.html#sec_browser-event-loop"><span class="section-number"> </span>The browser event loop</a> </li>
  <li> <a href="http://exploringjs.com/es6/ch_async.html#sec_receiving-results-asynchronously"><span class="section-number"> </span>Receiving results asynchronously</a> </li>
  <li> <a href="http://exploringjs.com/es6/ch_async.html#sec_looking-ahead-async"><span class="section-number"> </span>Looking ahead</a> </li>
  <li> <a href="http://exploringjs.com/es6/ch_async.html#sec_further-reading-async"><span class="section-number"> </span>Further reading</a> </li>
</ol>

#### Blocking the event loop 

As we have seen, each tab (in some browers, the complete browser) is managed by a single process – both the user interface and all other computations. That means that you can freeze the user interface by performing a long-running computation in that process. The code in
[blocking.html](blocking.html) 
demonstrates that.

Whenever the link at the beginning is clicked, the function `onClick()` is triggered. 
It uses the – synchronous – `sleep()` function to block the event loop for five seconds. 

During those seconds, the user interface doesn’t work. For example,
you can’t click the "Simple button".

#### Avoiding blocking 

You avoid blocking the event loop in two ways:

1. First, you don’t perform long-running computations in the main process, you move them to a different process. This can be achieved via the 
[Worker API](https://github.com/SYTW/simple-web-worker/tree/8fe44aa1b892d266543dbc060c7ac85cb181aee4)

2. Second, you don’t (synchronously) wait for the results of a long-running computation (your own algorithm in a Worker process, a network request, etc.), you carry on with the event loop and let the computation notify you when it is finished. 

In fact, you usually don’t even have a choice in browsers and have to do things this way. For example, there is no built-in way to sleep synchronously (like the previously implemented `sleep()`). Instead, `setTimeout()` lets you sleep asynchronously.


### Receiving results asynchronously 

Two common patterns for receiving results asynchronously are: events and callbacks.

#### Asynchronous results via events 

In this pattern for asynchronously receiving results, you create an object for each request and register event handlers with it: 

1. one for a successful computation, 
2. another one for handling errors. 

The code in [xmlhttprequest.html](xmlhttprequest.html) shows how that works with the XMLHttpRequest API:

  <ul>
    <li> <a href="http://exploringjs.com/es6/ch_async.html#sec_receiving-results-asynchronously">Asynchronous results via events</a> </li>
    <li> <a href="https://codepen.io/rimager/pen/duhkF">Super Simple API Request</a> CodePen </li>
  </ul>

