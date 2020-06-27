import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRounded(props) {

	const classes = useStyles();
	const [page, setPage] = React.useState(1);

	const handleChange = (event, value) => {
		setPage(value);
		props.getpagenum(value);
	};

  return (
    <div className={classes.root}>
		<Typography>Page: {page}</Typography>
		
		<Pagination count={Number(props.page)} page={page} size="large" onChange={handleChange} 
		
		renderItem={(item) => (
			<PaginationItem component={Link} to={`/${props.title}/page=${item.page}`}
					{...item} /> )}
			
		/>
		
    </div>
  );

}