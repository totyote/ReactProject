import React, { Component } from 'react';
import classNames from 'classnames/bind';
import MetisMenu from 'react-metismenu';
import { Route, BrowserRouter } from 'react-router-dom';

import { RootMenu, Frame, Home, QnA, Home_Post, WritePost } from 'pages';
import content from './menu/menu';
import mark from './img/logo192.png';
import Rootstyles from './css/RootCss.module.css';

const cx = classNames.bind(Rootstyles);


class Root extends Component {
	render() {
		return (
			<div>
				<img src={mark} className={cx('mark')} />
				<MetisMenu className={cx('metismenu')} content={content} activeLinkFromLocation />
				
				
				<BrowserRouter>
					<Route exact path="/Home" component={Home}/>
					<Route exact path="/Home/page=:page" component={Home}/>
					<Route exact path="/Home/page=:page/postnum=:postnum"  component={Home_Post} />
					<Route exact path="/:board/post" component={WritePost}/>
				</BrowserRouter>
			</div>
		);
	}
}

export default Root;