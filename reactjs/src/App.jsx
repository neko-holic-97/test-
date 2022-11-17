import reactLogo from './assets/react.svg'
import './App.css'
import Post from './components/Post'
import PostForm from './components/PostForm'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Post/>}/>
    <Route path= "create" element={<PostForm/>}/>
    </Routes>

    </div>
  )
} 

export default App
