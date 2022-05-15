import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
    </div>
  )
}

export default App
