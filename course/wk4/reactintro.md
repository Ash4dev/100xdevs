# Need for frontend frameworks: [The Elixir, React](https://www.freecodecamp.org/news/why-use-react-for-web-development/)

- Problem: DOM manipulation for reflecting changes is hard with DOM primitives & requires a hard refresh
    - whenever we create elements, they remain in the non-DOM memory unless explicitly appended
    - [pre-React DOM manipulation](/home/ashup/Desktop/100x/course/wk4/index.html) 
        - cumbersome to add/remove elements
        - parse function as strings in ``

- Problem Statment: Define a method to create the DOM & render it, given the current arbitrary state of the website
    - state: minimum dynmaic information(case-to-case) when combined with the input generates the output. In this case, an highly nested object.
- [React-like DOM manipulation](https://gist.github.com/hkirat/e61655a7d93ce06810488be402adebee)
    - here the old state gets cleared totally, but it may not be necessary if the state has not been updated
    - So, firstly calculate the difference between the new & old state and make updates 
        - store the old state in a variable. Let's call this concept the virtual DOM & calculate difference. **DONE BY REACT**
        - “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by taking least expensive route
    - Creating components that are sensitive to state changes is **DONE BY FRONTEND DEVELOPER**

# States, Components, Re-rendering
- Components: It is a re-usable, dynamic, HTML snippet that changes given the state. Ideally, independent of each other.
    - as FE need t
- React re-renders the DOM given the altered states and affected components.
- One may change only the values/recreate component, as per the use-case (if totally new thing required, recreation better)