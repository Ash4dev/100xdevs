sync: blocking(single-threaded)
async: non-blocking(multi-threaded)

JS on own is synchronous.
Runtime provides the asynchronous functionality, absent in JS.

Async programming is useful in case of intensive tasks & indepenedent tasks.
Eg. File Read (ask permission to kernel -> kernel reads it -> returns back info to requester).

We delegate the work from JS to engine, & continue with our life. The results from the delegated task stay in a queue, executing once the control is free.

Choice between sync & async is use-case dependent. Be careful.

Event Loop: 
1. JS engine(Call Stack, Memory Heap)
2. Web/Environment APIs*handle async ops)
3. Task Queue (add waiting tasks to top of stack)

Process:
1. JS engine consists of 2 parts:
    1. Functions create execution contexts(local variablers are stored inside them) & empty as they are executed
    2. Globally accessed variables are stored in the memory heap.
2. When async function is about to be called, it calls a Web/Environment API delegating the async task.
    1. Async tasks need to register themselves at the call backregister.
    2. Tasks line up at the callback queue, FIFO.
3. Once control is free from ongoing task, the callback at the front of the queue gets pushed to the top of the stack.
4. fetch() API methods are put into a higher priority queue

















Memory Heap: https://www.youtube.com/watch?v=5OJRqkYbK-4&list=PLl76Nbkn-YmliBahGdtw8M5Q2hreDsn1m&index=2&t=193s
https://www.codecademy.com/article/introduction-to-javascript-runtime-environments