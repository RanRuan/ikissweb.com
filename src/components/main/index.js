import React,{ Component} from 'react';
import { Row,Col,Icon } from 'antd';
import "../../assets/style/main.css";
import "../../assets/style/base.css";
import ikissweb from "../../assets/imgs/ikissweb.png";
import arrow from "../../assets/imgs/arrow_1.png";
import {FaAngleDown } from 'react-icons/lib/fa';

class Main extends Component{
	constructor(){
		super();
		this.state={
			show:false
		}
		this.scrollTop =0;
		this.scroll=this.scroll.bind(this);
	}
	scroll(){
		this.scrollTop=this.refs.arrow.getBoundingClientRect().top;
		if (window.scrollY>150&&window.scrollY<600) {
			this.setState({
				show:true
			})
		}else{
			this.setState({
				show:false
			})
		}
	}
	componentDidMount (){
		window.addEventListener('scroll',this.scroll)
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.scroll)

	}
	render(){
		let style = {};
		if (this.state.show) {
			style={display:"block"}
		}
		return (<section className="main">
			<Row>
				<Col xs={0} sm={0} md={0} lg={2} xl={3}></Col>
				<Col  xs={0} sm={0} md={0} lg={20} xl={18} style={{backgroundColor:"#e9e7e9"}}>
					<div className="titleWrap">
						<h2 className="subTitle">
							EveryIsObject
							<span className="iconTriangle"></span>
						</h2>
					</div>
				</Col>
				<Col xs={0} sm={0} md={0} lg={2} xl={3}></Col>
			</Row>

			<Row>
				<Col xs={0} sm={0} md={0} lg={2} xl={3} ></Col>
				<Col xs={24} sm={24} md={24} lg={20} xl={18} style={{backgroundColor:"#fff"}}>
					<Row><Col><p className="null"></p></Col></Row>
					<Row >
						<Col xs={24} sm={24} md={24} lg={12} xl={12}><div className="banner"><div className="inner"><img src={ikissweb} alt="ikissweb"/></div></div></Col>
						<Col xs={24} sm={24} md={24} lg={12} xl={12}>
							<div className="home-right-content">
								<h2 className="homeTitle">
									IKissWeb.com,
									<span>Keep It Simple & Stupid.</span>
								</h2>
								<Row><Col><p className="null"></p></Col></Row>
									<p className="homeContent"> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. </p>
								<Row><Col><p className="null"></p></Col></Row>
								<div className="viewMore">
									<div><span><Icon type="double-right" /></span></div>
								</div>
							</div>
						</Col>
					</Row>
					<Row><Col><p className="null"></p></Col></Row>
					<Row><Col span={24}><p className="scroll">SCROLL</p></Col></Row>
					<Row><Col span={24}><p className="arrow"><span><FaAngleDown/></span></p></Col></Row>
				</Col>
				<Col xs={0} sm={0} md={0} lg={2} xl={3}><div className="ink1R"><img src={arrow} alt="arrowShake" ref="arrow" style={style}/></div></Col>
			</Row>
		</section>
		)
	}
}
export default Main;
