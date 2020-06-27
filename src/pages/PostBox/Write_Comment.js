import React, {Component} from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import Poststyles from './css/PostcontentCss.module.css';
import avatar from './img/noavatar92.png';

const ps = classNames.bind(Poststyles);

class Write_Comment extends Component {
	state = {
		id: '',
		comment: ''
	};
	
	//사용함수
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};
	
	handleSubmit = (e) => {
		// 상태값을 onCreate 를 통하여 부모에게 전달
		this.props.onCreate(this.state);
		// 상태 초기화
		this.setState({
			id: '',
			comment: ''
		})
	}
	
	render() {
    return (
	<div>
		<form autoComplete='off' className={ps('form-style','grid')}onSubmit={this.handleSubmit}>
			<div>
				<img className={ps('avatar')} src={avatar}/>
			</div>
			<div>
				<div>
				<input
					className={ps('id-slot')}
					placeholder="아이디"
					value={this.state.id}
					onChange={this.handleChange}
					name="id"
				/>
				</div>
				<textarea
					className={ps('comment-slot')}
					placeholder="댓글.."
					value={this.state.comment}
					onChange={this.handleChange}
					name="comment"
				/>
				<div>
					<button className={ps('button-style')}type="submit">등록</button>
				</div>
			</div>
			
		</form>
	 </div>
    );
  }
}

export default Write_Comment;