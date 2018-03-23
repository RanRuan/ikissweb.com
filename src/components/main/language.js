import React,{ Component} from 'react';
import { Row,Col } from 'antd';
import "../../assets/style/section.css";

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';
const data = [
      {name: 'JavaScript', GitHubPullRequests: 2300000, BaiduSearchIndex: 1066680, amt: 2400},
      {name: 'C++', GitHubPullRequests: 413000, BaiduSearchIndex: 1231800, amt: 2210},
      {name: 'Java', GitHubPullRequests: 986000, BaiduSearchIndex: 4831800, amt: 2290},
      {name: 'Pathon',GitHubPullRequests: 1000000, BaiduSearchIndex: 3065220, amt: 2000},
      {name: 'C#', GitHubPullRequests: 326000, BaiduSearchIndex: 693161, amt: 2181},
      {name: 'PHP',GitHubPullRequests: 559000, BaiduSearchIndex: 1816560, amt: 2500},
      {name: 'Ruby', GitHubPullRequests: 870000, BaiduSearchIndex: 619920, amt: 2100},
      {name: 'Go', GitHubPullRequests: 285000, BaiduSearchIndex: 451080, amt: 2100},
      {name: 'CSS', GitHubPullRequests: 335000, BaiduSearchIndex: 891000, amt: 2100},
      {name: 'C', GitHubPullRequests: 326000, BaiduSearchIndex: 893160, amt: 2100}
];
const data2 = [
      {name: 'JavaScript', GitHubPullRequests: 0, BaiduSearchIndex: 0, amt: 2400},
      {name: 'C++', GitHubPullRequests:0, BaiduSearchIndex: 0, amt: 2210},
      {name: 'Java', GitHubPullRequests:0, BaiduSearchIndex: 0, amt: 2290},
      {name: 'Pathon',GitHubPullRequests: 0, BaiduSearchIndex: 0, amt: 2000},
      {name: 'C#', GitHubPullRequests:0, BaiduSearchIndex:0, amt: 2181},
      {name: 'PHP',GitHubPullRequests:0, BaiduSearchIndex: 0, amt: 2500},
      {name: 'Ruby', GitHubPullRequests:0, BaiduSearchIndex:0, amt: 2100},
      {name: 'Go', GitHubPullRequests:0, BaiduSearchIndex:0, amt: 2100},
      {name: 'CSS', GitHubPullRequests:0, BaiduSearchIndex:0, amt: 2100},
      {name: 'C', GitHubPullRequests:0, BaiduSearchIndex:0, amt: 2100}
];
class Language extends Component{
		constructor(){
		super();
		this.state={
			showData:false
		}
		this.scroll=this.scroll.bind(this);
	}
	scroll(){
		this.scrollTop=this.refs.language.getBoundingClientRect().top;
		this.winHeight= document.body.clientHeight;
		if (this.scrollTop<this.winHeight) {
			this.setState({
				showData:true
			})
		}else{
			this.setState({
				showData:false
			})
		}
	}
	componentDidMount (){
		window.addEventListener('scroll',this.scroll,window.scrollY)
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.scroll)

	}
	render(){
		let showData=data2;
		if (this.state.showData) {
			showData=data;
		}
		return (<section className="homeSection">
			<Row>
				<Col xs={0} sm={0} md={0} lg={2} xl={3}></Col>
					<Col xs ={24}  sm={24} md={24} lg={20} xl={18}>
						<div className="language">
							<h2 className="sectionTitle">Programing Languages Trends </h2>
						</div>
					</Col>
				<Col xs ={0} sm={0} md={0} lg={2} xl={3}></Col>
			</Row>
			<Row>
				<Col xs ={0} sm={0} md={0} lg={2} xl={3}><div className="wow"></div></Col>
				<Col xs ={24} sm={24} md={24} lg={20} xl={18}>
				<div className="sectionContent" ref="language">
					<Row >
						<Col xs ={0} sm={0} md={0} lg={2} xl={2}></Col>
						<Col xs ={24} sm={24} md={24} lg={20} xl={20}>
						<ResponsiveContainer width="100%" height={300}>
							<LineChart  height={300} data={showData}
				            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
						       <XAxis dataKey="name"/>
						       <YAxis/>
						       <CartesianGrid strokeDasharray="3 3"/>
						       <Tooltip/>
						       <Legend />
						       <Line type="monotone" dataKey="BaiduSearchIndex" stroke="#8884d8" activeDot={{r: 8}}/>
						       <Line type="monotone" dataKey="GitHubPullRequests" stroke="#82ca9d" />
				     		 </LineChart>
				     		</ResponsiveContainer>
						</Col>
						<Col xs ={0} sm={0} md={0} lg={2} xl={2}></Col>
					</Row>
				</div>
				</Col>
				<Col xs ={0} sm={0} md={0} lg={2} xl={3}></Col>
			</Row>
		</section>
		)
	}
}
export default Language;
