import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

import {BrowserRouter as Switch, Route, Router} from 'react-router-dom';

function App(props) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [toggled, setToggled] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState({
    id: 1,
    show: false
  });

  const handleNavbarToggle = () =>{
    setToggled((prevState)=>{
      return prevState === 0 ? 1 : 0;
    });
  }

  const handleShowFullDescription = (descriptionId, show) =>{
    setShowFullDescription(prevState =>{
      const State = {...prevState};
      State.id = descriptionId;
      State.show = show;
      return State;
    })
  }

  return (
    <>
      <Navbar pages={[{name: "Home", id:"home"}, {name: "About", id:"about"}]} on="home" handleNavbarToggle={handleNavbarToggle} toggled={toggled}/>
      <Homepage handleShowFullDescription={handleShowFullDescription} showFullDescription={showFullDescription} />
      <Footer/>
      </>
  );
}

export default App;
