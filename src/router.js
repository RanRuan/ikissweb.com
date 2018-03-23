import React, {Component} from 'react';
import{Route} from 'react-router-dom';

import Home from "./pages/home.js";
import Html5 from "./pages/html.js";
import Css3 from "./pages/css3.js";
import MVC from "./pages/mvc.js";
import Node from "./pages/node.js";
import MongoDB from "./pages/mongodb.js";
import JavaScript from "./pages/js.js";


class RoadPath extends Component {
	render(){
		return(
				<div>
					<Route exact path="/" component={Home}></Route>
					<Route path="/html5" component={Html5}></Route>
					<Route path="/css3" component={Css3}></Route>
					<Route path="/javascript" component={JavaScript}></Route>
					<Route path="/mvc" component={MVC}></Route>
					<Route path="/Node" component={Node}></Route>
					<Route path="/mongodb" component={MongoDB}></Route>
				</div>
			)
	}
	
}
export default RoadPath;