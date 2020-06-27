import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './css/ContentCss.module.css';

const cx = classNames.bind(styles);

class Home extends Component {
	render() {
		return (
			<div className={cx('Content','ContentPadding')}>
				<h1>Hello world!</h1>
			</div>
		);
	}
}

export default Home;