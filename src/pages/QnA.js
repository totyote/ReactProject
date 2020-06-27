import React, {Component} from 'react';
import classNames from 'classnames/bind';

import Pagesstyles from './css/PagesCss.module.css';
import ShowPost from './ShowPost';

const cx = classNames.bind(Pagesstyles);

class QnA extends Component {
	render() {
		return (
		<div>
			<h1 className={cx('title')}>Category: Q&A</h1>
			<ShowPost />
			<h1 className={cx('footer')}>by 20140635 컴퓨터공학과 이원준 </h1>
		</div>
		);
	}
}

export default QnA;