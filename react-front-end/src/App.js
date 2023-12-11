import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Homes from './components/Homes';
import Condos from './components/Condos';
import Team from './components/Team';
import Guide from './components/Guide';
import Contact from './components/Contact';
import Header from './components/Header';


function App() {
return(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/homes" element={<Homes />}></Route>
    <Route exact path="/condos" element={<Condos />}></Route>
    <Route exact path="/team" element={<Team />}></Route>
    <Route exact path="/guide" element={<Guide />}></Route>
    <Route exact path="/contact" element={<Contact />}></Route>
  </Routes>
  </BrowserRouter>

)
}

export default App;
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       message: 'Click the button to load data!'
//     }
//   }

//   fetchData = () => {
//     axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
//     .then((response) => {
//       // handle success
//       console.log(response.data) // The entire response from the Rails API

//       console.log(response.data.message) // Just the message
//       this.setState({
//         message: response.data.message
//       });
//     }) 
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>{ this.state.message }</h1>
//         <button onClick={this.fetchData} >
//           Fetch Data
//         </button>        
//       </div>
//     );
//   }
// }


