import React,{ Component} from 'react';
import Head from "../components/header/";
import Nav from "../components/header/nav.js";
import Main from "../components/main";
import Language from "../components/main/language.js";
import Footer from "../components/footer";
import "../assets/style/common.css";

class Home extends Component {
  render() {
    return (
    	<div className="home">
	    	<Head/>
	    	<Nav/>
	    	<Main/>
			<Language/>
			<Footer/>
	    </div>
    );
  }
}
export default Home;