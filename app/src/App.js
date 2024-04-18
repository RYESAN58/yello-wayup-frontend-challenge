import './App.css';
import Jobs from './components/jobs';
import {BrowserRouter, Routes, Route, link, Link} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/student/viewer' element={<Jobs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
