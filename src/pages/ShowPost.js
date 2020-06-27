import React, {Component} from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import Pagesstyles from './css/PagesCss.module.css';
import Poststyles from './css/PostCss.module.css';
import Media from './ContentBox/list';
import Media2 from './ContentBox/list2';
import Side from './ContentBox/side/side';
import Side2 from './ContentBox/side/side2';
import Img from './PostBox/img';
import Text from './PostBox/text';
import Comment from './PostBox/Comment';
import Write_Comment from './PostBox/Write_Comment';

const cx = classNames.bind(Pagesstyles);
const ps = classNames.bind(Poststyles);


class ShowPost extends Component {
	
	handleCreate = (data) => {
		this.post_comment(this.props.page, this.props.postnum, data.id, data.comment);
	}
	
	post_comment = (p,n,i,c) => {
		const obj = { page: p, postnum: n, id: i, comment: c }; // 보낼 데이터
		axios.post('/web_project/writecomment_query.php', obj);
	}; 
	
	render() {
		return (
		<div className={cx('Content')}>
			<section className={ps('Content-area')}>
				<div className={cx('divide-col')}>
					<div className={cx('1st-post','Content-seperate')}>
						<div className={ps('Content','post')}> 
							<Img/>
						<div className={ps('text')}>
							<Text page={this.props.page} postnum={this.props.postnum}/>
						</div>
						</div>
					</div>
					<div className={cx('1st-post','Content-seperate')}>
						<div className={ps('Content','reply-input','text')}>
							<Write_Comment onCreate={this.handleCreate} page={this.props.page} postnum={this.props.postnum}/>
						</div>
					</div>
					<div className={cx('1st-post','Content-seperate')}>
						<div className={ps('Content','reply','text')}> 
							<Comment page={this.props.page} postnum={this.props.postnum}/>
						</div>
					</div>
				</div>
				
				
				<div className={cx('divide-col')}>
					<div className={cx('Content-seperate')}>
						<Side />
					</div>
					<div className={cx('Content-seperate')}>
						<Side2 />
					</div>
					
				</div>
				
			</section>
		</div>
		);
	}
}

export default ShowPost;