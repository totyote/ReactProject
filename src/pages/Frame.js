import React, {Component} from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import Ripples from 'react-ripples'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Pagesstyles from './css/PagesCss.module.css';
import Media from './ContentBox/list';
import Media2 from './ContentBox/list2';
import Side from './ContentBox/side/side';
import Side2 from './ContentBox/side/side2';
import Pagi from './ContentBox/side/pagination';

const cx = classNames.bind(Pagesstyles);


class Frame extends Component {
	state = {
		posts: {'page': '', 'pageout': '', 'num': ''},
		pagenum: '',
		visible: ''
	};
	
	//라이프사이클
	
	componentDidMount(){
		this.postnum(this.props.title);
		this.setPagenum(this.props.pagenum);
	};
	
	componentWillReceiveProps(nextProps) {
		this.postnum(nextProps.title);
	};
  
  
  
    //사용함수
  
	postnum = (ti) => {
		const obj = { title: ti }; // 보낼 데이터
		axios.post('/web_project/postnum_query.php', obj)
			.then( response => { this.setState({posts: response.data});})
	};
	
	setPagenum = (e) => {
		this.setState({pagenum: e});
	};
	
	
	render() {	
		let { pagenum } = this.state;
		let { page, pageout } = this.state.posts;
		return (
		<div className={cx('Content')}>
			<section className={cx('Content-area')}>
				<div className={cx('divide-col')}>
					<div className={cx('1st-post','Content-seperate')}>
						<Media title='Home' postnum='1' tag='1' page={this.state.pagenum} num={this.state.posts.num} />
					</div>
					
					<div className={cx('sub-grid')}>
					
						<div className={cx('1st-sub-col')}>
							<div className={cx('1st-post','Content-seperate')}>
								{
									( (pagenum!==page) || (pageout>=3) || (pageout===0 && page>=2) )
									&&<Media2 title='Home' postnum='3' tag='3' page={this.state.pagenum} num={this.state.posts.num} />
								}
							</div>
							<div className={cx('1st-post','Content-seperate')}>
								{
									( (pagenum!==page) || (pageout>=6) || (pageout===0 && page>=2) )
									&&<Media2 title='Home' postnum='6' tag='6' page={this.state.pagenum} num={this.state.posts.num} />
								}
							</div>
						</div>
						
						<div className={cx('2nd-sub-col')}>
							<div className={cx('1st-post','Content-seperate')}>
								{
									( (pagenum!==page) || (pageout>=4) || (pageout===0 && page>=2) )
									&&<Media title='Home' postnum='4' tag='4' page={this.state.pagenum} num={this.state.posts.num} />
								}
							</div>
							<div className={cx('1st-post','Content-seperate')}>
								{
									( (pagenum!==page) || (pageout>=7) || (pageout===0 && page>=2) )
									&& <Media title='Home' postnum='7' tag='7' page={this.state.pagenum} num={this.state.posts.num} />
								}
							</div>
						</div>
					
					</div>
					
				</div>
				
				<div className={cx('divide-col')}>
					<div className={cx('1st-post','Content-seperate')}>
						{
							( (pagenum!==page) || (pageout>=2) || (pageout===0 && page>=2) )
							&& <Media2 title='Home' postnum='2' tag='2' page={this.state.pagenum} num={this.state.posts.num} />
						}
					</div>
					<div className={cx('1st-post','Content-seperate')}>
						{
							( (pagenum!==page) || (pageout>=5) || (pageout===0 && page>=2) )
							&& <Media2 title='Home' postnum='5' tag='5' page={this.state.pagenum} num={this.state.posts.num} />
						}
					</div>
					<div className={cx('1st-post','Content-seperate')}>
						{
							(pagenum!==page  || (pageout===0 && page>=2) )
							&& <Media2 title='Home' postnum='8' tag='8' page={this.state.pagenum}  num={this.state.posts.num} />
						}
					</div>
					
				</div>
				
				<div className={cx('divide-col')}>
					<div className={cx('Content-seperate')}>
						<Side />
					</div>
					<div className={cx('Content-seperate')}>
						<Side2 />
					</div>
					<div className={cx('Content-seperate')}>
						<Ripples>
							<Link to={`/${this.props.title}/post`}>
								<button className={cx('button')}>
								글쓰기
								</button>
							</Link>
						</Ripples>
					</div>
				</div>
				
			</section>
				<div className={cx('Content-seperate', 'Pagi-style')}>
						<Pagi title={this.props.title} page={this.state.posts.page} getpagenum={this.setPagenum}/>
				</div>
		</div>
		);
	}
}

export default Frame;