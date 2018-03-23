import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import { Row,Col,Menu } from 'antd';
import { Input } from 'antd';
import "../../assets/style/nav.css";
const Search = Input.Search;
class Nav extends Component {
	render(){
		return (<nav className="kissNavs">
			<div className="kissNavWrap">
			    	<Row >
			    	<Col xs ={0} sm={0} md={3} lg={3} xl={3} style={{backgroundColor:'#001529'}}></Col>
					    <Col xs ={0} sm={24} md={18} lg={18} xl={14} >
				    		<Menu
						        mode="horizontal"
						        theme="dark"
						        defaultSelectedKeys={['0']}
						        style={{height:"40px",lineHeight: '40px',border:"none",fontSize:"16px",fontFamily:"Arial"}}>
						        <Menu.Item key="1"><Link to="/html5">HTML5</Link></Menu.Item>
						        <Menu.Item key="2"><Link to="css3">CSS3</Link></Menu.Item>
						        <Menu.Item key="3"><Link to="/javascript">JavaScript</Link></Menu.Item>
						        <Menu.Item key="4"><Link to="/mvc">MVC</Link></Menu.Item>
						        <Menu.Item key="5"><Link to="/node">Node</Link></Menu.Item>
						        <Menu.Item key="6"><Link to="/mongodb">MongoDB</Link></Menu.Item>
				      		</Menu>
					   </Col>
					    <Col xs ={0} sm={0} md={0} lg={0} xl={4} >
					      	 <Search
							      placeholder="input search text"
							      onSearch={value => console.log(value)}
							      style={{ width: 160,marginTop:6}}
									 />
					    </Col>
				    <Col xs ={0} sm={0} md={3} lg={3} xl={3} ></Col>
			      </Row>
			      </div>
			     </nav>)
	}
}
export default Nav;