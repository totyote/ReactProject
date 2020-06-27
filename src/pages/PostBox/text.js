import React, {Component} from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import Poststyles from './css/PostcontentCss.module.css';

const ps = classNames.bind(Poststyles);


class text extends Component {
	state = {
		page: '',
		postnum: '',
		post: {'id': '', 'subject': '', 'content': '', 'day': ''}
	};
	
	//라이프사이클
	
	componentDidMount(){
		this.setPage(this.props.page);
		this.setPostnum(this.props.postnum);
		this.postquery(this.props.page,this.props.postnum);
	};
	
	//사용함수
	
	postquery = (p,n) => {
		const obj = { page: p, postnum: n }; // 보낼 데이터
		axios.post('/web_project/post_query.php', obj)
			.then( response => { this.setState({post: response.data});})
	};
  
	setPage = (e) => {
		this.setState({page: e});
	};
	
	setPostnum = (e) => {
		this.setState({postnum: e});
	};
	
	render() {
		return (
		<div className={ps('font')}>
			<div className={ps('subject')}>
				{this.state.post.subject}
			</div>
			<div className={ps('sub-subject')}>
				{this.state.post.id}<span className={ps('nbsp')}>{this.state.post.day}</span>
			</div>
			<div className={ps('content')}>
				{this.state.post.content}
			</div>
		</div>
		);
	};
}

export default text;