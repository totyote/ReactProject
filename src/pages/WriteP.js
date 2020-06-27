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
import Write_Post from './PostBox/Write_Post';

const cx = classNames.bind(Pagesstyles);
const ps = classNames.bind(Poststyles);


class WriteP extends Component {
	
	handleCreate = (data) => {
		this.post_comment(this.props.board, data.id, data.title, data.comment);
	}
	
	post_comment = (b,i,t,c) => {
		const obj = { board: b, id: i, title: t, comment: c }; // 보낼 데이터
		axios.post('/web_project/writepost_query.php', obj);
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
							<Write_Post onCreate={this.handleCreate} title={this.props.title} />
						</div>
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

export default WriteP;