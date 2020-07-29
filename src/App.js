import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Pages/Home';
import {About} from './About';
import {Contact} from './Pages/Contact';
import {Sources} from './Pages/Sources';
import {NoMatch} from './Pages/NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
// import Dropzone from "react-dropzone";
import {DropZone} from './components/DropZone'




function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <DropZone/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />  
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/sources" component={Sources} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
