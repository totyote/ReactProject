import React, {Component} from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import Poststyles from './css/PostcontentCss.module.css';
import avatar from './img/noavatar92.png';

const ps = classNames.bind(Poststyles);

class Comment extends Component {
	state = {
		page: '',
		postnum: '',
		comment_num: {'num': ''},
		comment_data: { 'data': [] }
	};
	
	//라이프사이클
	
	componentDidMount(){
		this.setPage(this.props.page);
		this.setPostnum(this.props.postnum);
		this.commentquery(this.props.page,this.props.postnum);
	};
	
	//사용함수
	
	commentquery = (p,n) => {
		const obj = { page: p, postnum: n }; // 보낼 데이터
		axios.post('/web_project/comment_query.php', obj)
			.then( response => { this.setState({comment_data: response.data});})
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
			{
				this.state.comment_data.data.map((item, i) => {
                    return (
					<div className={ps('content','grid')} key={i}>
						<div>
							<img className={ps('avatar')} src={avatar}/>
						</div>
						<div>
							<span className={ps('id')}>{item.id} - </span><span className={ps('comment-day')}>{item.day} </span>
							<div className={ps('comment')}>{item.comment}</div>
						</div>
					</div>
					);
                })
			}
		</div>
		);
	};
}

export default Comment;