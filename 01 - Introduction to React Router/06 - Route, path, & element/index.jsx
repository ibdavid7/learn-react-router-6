import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

const About = () => {
  return (
    <h1>About compontent</h1>
  );
}


const Home = () => {
  return (
    <h1>Home Component</h1>
    // <h1>Hello, React Router!</h1>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);