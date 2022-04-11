import About from './Components/About.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Portfolio" component={Portfolio}/>
          <Route exact path="/Resume" component={Resume}/>

          <Route exact path="/" component={About}/>
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
