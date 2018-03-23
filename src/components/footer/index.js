import React ,{Component} from 'react';
import "../../assets/style/footer.css";
import {Row,Col,Icon} from 'antd';

class Footer extends Component {
	backTime(){
		let nowTime = new Date().getTime();
		let TargetTime = new Date(2016,6,1,0,0,0).getTime();
		let Days = parseInt((nowTime -TargetTime)/86400000,10) + "Days";
		return Days;
	}
	render(){
		return(<footer className="footer">
		<Row>
			<Col span={3}></Col>
			<Col span={18}>
				<div className="footerContent">
					<Row>
						<Col xs ={24} sm={24} md={8} lg={8} xl={8}>
							<h4 className="footerTitle">Why kiss?</h4>
							<div className="webInfo">
								<p>Firstly,I have a dream that Keep It(web development) Simple and Stupid;</p>
								<p>Secondly,I enjoy it,it's marvelous moment for me when my web site pages is online;</p> 
								<p>Finally, web development is an endless road ,push me to learn new technology;</p> 
							</div>
						</Col>
						<Col xs ={24} sm={24} md={8} lg={8} xl={8}>
							<h4 className="footerTitle">Say Hello<Icon type="smile-o" style={{marginLeft:"5px"}}/></h4>

							<ul className="myInfo">
								<li key={0}>Name:<span>Ruan Yuan</span></li>	
								<li key={1}>EngLishName:<span>Ran</span></li>
								<li key={3}>Domain:<span>ikissweb.com</span></li>	
								<li key={4}>Email:<span>ikissweb@163.com</span></li>	
								<li key={5}>GitHub:<span>github.com/RanRuan</span></li>	
							</ul>
						</Col>
						<Col xs ={24} sm={24} md={8} lg={8} xl={8}>
							<h4 className="footerTitle">Keep coding</h4>
							<p className="backTime">
								{this.backTime()}
							</p>
							<p className="backTime">
								......<Icon type="trademark" spin={true} />......
							</p>
						</Col>
					</Row>
				</div>
			</Col>
			<Col span={3}></Col>
		</Row>
		</footer>
	)
	}
}
export default Footer ;