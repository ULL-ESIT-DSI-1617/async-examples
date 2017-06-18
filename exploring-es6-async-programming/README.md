* [24. Asynchronous programming (background)](http://exploringjs.com/es6/ch_async.html)
      <ol>
          <li>
            <a href="http://exploringjs.com/es6/ch_async.html#sec_javascript-call-stack"><span class="section-number">24.1 </span>The JavaScript call stack</a>
          </li>
          <li>
            <a href="http://exploringjs.com/es6/ch_async.html#sec_browser-event-loop"><span class="section-number">24.2 </span>The browser event loop</a>
          </li>
          <li>
            <a href="http://exploringjs.com/es6/ch_async.html#sec_receiving-results-asynchronously"><span class="section-number">24.3 </span>Receiving results asynchronously</a>
          </li>
          <li>
            <a href="http://exploringjs.com/es6/ch_async.html#sec_looking-ahead-async"><span class="section-number">24.4 </span>Looking ahead</a>
          </li>
          <li>
            <a href="http://exploringjs.com/es6/ch_async.html#sec_further-reading-async"><span class="section-number">24.5 </span>Further reading</a>
          </li>
        </ol>

### Receiving results asynchronously 

Two common patterns for receiving results asynchronously are: events and callbacks.

#### Asynchronous results via events 

In this pattern for asynchronously receiving results, you create an object for each request and register event handlers with it: 

1. one for a successful computation, 
2. another one for handling errors. 

The code in [xmlhttprequest.html](xmlhttprequest.html) shows how that works with the XMLHttpRequest API:

