import { React } from 'react'
import './App.css'

// jsx file where both js & xml can be written
// npm run build: converts react code to html & js file in a dist folder, only this matters
function App(){
   
}









function App2() {
  // array destructuring like object destructuring
  const [count, setCount] = React.useState(0);

  // returns html using js
  return (
    <div>
        <button onClick={() => setCount((count) => (count+1))}>
        </button>
    </div>
  )
}

export default App
