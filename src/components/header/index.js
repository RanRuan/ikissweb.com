import React,{ Component } from "react";
import { Row,Col,Icon} from 'antd';
import {Link} from 'react-router-dom';

import "../../assets/style/head.css";

class Head extends Component {
	constructor(){
		super();
		this.state={
		showMenu:false,
		pageW:document.body.clientWidth,
		pageH:document.body.clientHeight
		}
		this.resize=this.isResize.bind(this);
	}
	isShowMenu(){
		let value = this.state.showMenu;
		this.setState({
			showMenu:!value
		})
	}
	isResize(){
		let pageW = document.body.clientWidth;
		let pageH = document.body.clientHeight;

		this.setState({
				pageW,
				pageH
		})
	}
	componentDidMount(){
		window.addEventListener("resize",this.resize)
	}
	componentWillUnmount(){
		window.removeEventListener("resize",this.resize)

	}
	render(){
		let style={};
		if (this.state.showMenu) {
			style={right:0,width:this.state.pageW,height:this.state.pageH}
		}
		return (
				<header className="header">
					<div className="fixedHeader">
				      	<Row>
					      	<Col xs={0} sm={0} md={1} lg={2} xl={3}></Col>
						    <Col xs={24} sm={24} md={22} lg={20} xl={18}>
						      	<Row>
						      	<Col xs={6} sm={6} md={6} lg={6}>
						      		<h1 id="logo">IKissWeb</h1>
						      	</Col>

						      	<Col xs={14} sm={3} md={4} lg={6} xl={8}>
						      	</Col>
						      	<Col xs={0} sm={15} md={14} lg={12} xl={10}>
						      		<ul id="kissSkills">
						      			<li key={0}></li>
						      			<li key={1}></li>
						      			<li key={2}></li>
						      			<li key={3}></li>
						      			<li key={4}></li>
						      			<li key={5}></li>
						      			<li key={6}></li>
						      			<li key={7}></li>
						      		</ul>
						      	</Col>
						      	<Col xs={4} sm={0} md={0} lg={0} xl={0}>
						      		<div className="resBtn" onClick={this.isShowMenu.bind(this)}>
						      			<Icon type="menu-fold" style={{fontSize:"30px",color:"#fff"}}/>
						      		</div>
						      		<div id="resMenu" style={style}>
						      			<ul className="resMenuList" onClick={this.isShowMenu.bind(this)}>
							      			<li key={0}><Link to="/html5" style={{color:"#fff"}}>HTML5</Link></li>
							      			<li key={1}><Link to="css3" style={{color:"#fff"}}>CSS3</Link></li>
							      			<li key={2}><Link to="/javascript" style={{color:"#fff"}}>JavaScript</Link></li>
							      			<li key={3}><Link to="/mvc" style={{color:"#fff"}}>MVC</Link></li>
							      			<li key={4}><Link to="/node" style={{color:"#fff"}}>Node</Link></li>
							      			<li key={5}><Link to="/mongodb" style={{color:"#fff"}}>MongoDB</Link></li>
						      			</ul>
						      		</div>
						      	</Col>
						      	</Row>
					      	</Col>
				      		<Col xs={0} sm={0} md={1} lg={2} xl={3} ></Col>
			    		</Row>
			    	</div>
	      		</header>)
		}
}
export default Head;