import React ,{Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import './normalize.css';
import './style.css';
import Privacy from './privacy.js';

import Feedback from './feedback';
import Home from './landing';
import Thanks from './thanks';

class App extends Component {
	render(){
  return (
		<BrowserRouter>
		
        <div>
          <Route exact={true} path='/' component ={Home}/>
          <Route exact={true} path='/feedback' component ={Feedback}/>
					<Route exact={true} path='/privacy' component ={Privacy} />
          <Route exact={true} path='/thanks' component ={Thanks} />
        </div>
      </BrowserRouter>

	);
	}
}

export default App;

