import { useState } from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
import { Routes,Route} from 'react-router-dom';
import { componentsByRoute } from './routes/routes';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
       <Routes>
        {Object.entries(componentsByRoute).map(([route, component]) => (
                  <Route key={route} path={route} element={component} />
         ))}
        </Routes>
      </HashRouter>
    </>
  )
}

export default App