import './App.css';
import Jobs from './components/jobs';
import {BrowserRouter, Routes, Route, link, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/student/viewer' element={<Jobs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
