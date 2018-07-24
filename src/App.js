import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Discover from "./pages/Discover"; // pupster
import About from "./pages/About"; // pupster
import Search from "./pages/Search"; // pupster
import Navbar from "./components/Navbar";// pupster
import Footer from "./components/Footer";// pupster
import Wrapper from "./components/Wrapper";// pupster


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div class="jumbotron jumbotron-fluid col-md-6 offset-md-3">
//           <div class="container">
//             <h1 class="display-4">RATE THAT DEV</h1>
//             <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//           </div>
//         </div>
//       </div>
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h1 className="App-title">Welcome to React</h1>
//       //   </header>
//       //   <p className="App-intro">
//       //     To get started, edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       // </div>
//     );
//   }
// }


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
