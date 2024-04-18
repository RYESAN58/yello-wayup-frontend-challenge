import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path)
  }
  return(
    <div className="home-page">
      <div className="card">
      <h2>Welcome!</h2>
      <p>Get started by clicking the buttons below.</p>
        <button onClick={() => handleClick('/student/viewer')}>Veiw Jobs</button>
        <a href="https://yello.co/">
        <button>Visit Us!</button>
        </a>
      </div>
    </div>
  )
}


export default Home;