import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import Home from './components/Home'
import LoginSignup from './components/LoginSignup'

const router = createBrowserRouter(
  [
    {
      path: '/main',
      element:
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    },
    {
      path: '/pastes',
      element:
      <div>
        <Navbar></Navbar>
        <Paste></Paste>
      </div>
    },
    {
      path: '/pastes/:id',
      element:
      <div>
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
      </div>
    },
    {
      path: '/',
      element:
      <div>
        <LoginSignup></LoginSignup>
      </div>
    },
  ]
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
