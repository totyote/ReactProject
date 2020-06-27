import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import temp from './img/temp.png';

class MediaCard extends Component {
  state = {
		posts: {'id': '', 'subject': '', 'content': '', 'day': ''}
  };
  
  //라이프 사이클
  
  componentDidMount(){
		//this.postnum(this.props.tag, this.props.page, this.props.num);
  };
  
  componentWillReceiveProps(nextProps) {
		this.postnum(nextProps.tag, nextProps.page, nextProps.num);
  };
  
  //사용함수
  
  postnum = (t,p,n) => {
		const obj = { tag: t, page: p, num: n }; // 보낼 데이터
		axios.post('/web_project/thum_query.php', obj)
			.then( response => { this.setState({posts: response.data});})
  };
  
	
  render() {
	return (
		<Card> 
		<CardActionArea>
		<Link to={`/${this.props.title}/page=${this.props.page}/postnum=${this.props.postnum}`}>
			<CardMedia
			style={{height: 400}}
			image={temp}
			title={this.state.posts.subject}
			/>
		</Link>
			<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
				{this.state.posts.subject}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				{this.state.posts.content}
			</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Button size="small" color="primary" >
			{this.state.posts.id}
			</Button>
			<Button size="small" color="primary">
			{this.state.posts.day}
			</Button>
		</CardActions>
		</Card>
	);
  }
}


export default MediaCard;