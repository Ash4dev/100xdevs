everything in js: objects (no classes as such as in CPP)

Promises: objects represents eventual completion/failure of an async op & its resulting value

async ops: file access, database request, length calculation, encrypting data

3 states of promise:
1. pending: initial state of promise
2. fulfilled: promise fulfilled
3. rejected: promise failed

promises provided by libraries like Q/BlueBird earlier, later integrated into core JS runtime. Native functions are preferrable.

desired values from async ops cannot be accessed directly like let x = .then(){return stuff;}, need to perform promise chaining to do so. https://stackoverflow.com/a/36946264/19817062

resolve helps us to retrieve the results from the async operation & when it successfully works we say the promise fulfilled. 

reject returns the error that is to be shown when the async op was not successful.

finally is *always* returned, displays the termination of promise.

fetch takes in the input as a URL and returns a promise & it can be consumed as discussed above. When used alongside normal promises, it is executed first as the fetch related callbacks are put into a preferential microtask queue.

Promises which encounter network error, only get rejected else they are accepted. Additional info can be sent in as  arguments to the fetch function https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

