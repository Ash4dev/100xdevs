events: actions that lead to change in state, need to react to them accordingly. eg: click by user(PointerEvent),tab resize, form filled, scroll
Appropriate reaction to event: by creating event listener + event handler functions 
Function to be done in reaction uses an automatically passed event object to provide extra features and information.

// eventType, response, cancelBubble
// eventObj passed automatically(in case missed)
document.getElementById("owl").addEventListener("click", (eeventObj) => {console.log(eventObj);eventObj.stopPropogation(); return eventObj;}, false)

Capture: handlers move from parent to child
Bubbling: handlers move from child to parent (used mostly)

Both bubbling and capturing can be stopped using ventObj.stopPropogation()


The most deeply nested element that caused the event is called a target element, accessible as event.target

https://developer.mozilla.org/en-US/docs/Web/Events
https://javascript.info/bubbling-and-capturing