import React, {Component} from 'react';
import classNames from 'classnames/bind';

import Poststyles from './css/PostcontentCss.module.css';

const ps = classNames.bind(Poststyles);

class Write_Post extends Component {
	state = {
		id: '',
		title: '',
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
			title: '',
			comment: ''
		})
	}
	
	render() {
    return (
	<div>
		<form autoComplete='off' className={ps('postform-style')}onSubmit={this.handleSubmit}>
			<div>
				<div>
				<input
					className={ps('postid-slot')}
					placeholder="아이디"
					value={this.state.id}
					onChange={this.handleChange}
					name="id"
				/>
				<input
					className={ps('posttitle-slot')}
					placeholder="제목"
					value={this.state.title}
					onChange={this.handleChange}
					name="title"
				/>
				</div>
				<textarea
					className={ps('post-slot')}
					placeholder="내용.."
					value={this.state.comment}
					onChange={this.handleChange}
					name="comment"
				/>
				<div>
					<button className={ps('postbutton-style')}type="submit">등록</button>
				</div>
			</div>
			
		</form>
	 </div>
    );
  }
}

export default Write_Post;