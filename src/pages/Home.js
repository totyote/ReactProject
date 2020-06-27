import React, {Component} from 'react';
import classNames from 'classnames/bind';

import Pagesstyles from './css/PagesCss.module.css';
import Frame from './Frame';

const cx = classNames.bind(Pagesstyles);


class Home extends Component {
	state = {
		pagenum: '1'
	};
	
	//라이프사이클

	componentDidMount(){
			this.setPagenum(this.props.match.params.page);
	};
	

	//사용함수

	setPagenum = (e) => {
			this.setState({pagenum: e});
	};
	
	
	render() {
		return (
		<div>
			<h1 className={cx('title')}>Category: Home</h1>
			<Frame title='Home' pagenum={this.state.pagenum}/>
			<h1 className={cx('footer')}>by 20140635 컴퓨터공학과 이원준 </h1>
		</div>
		);
	}
}

export default Home;