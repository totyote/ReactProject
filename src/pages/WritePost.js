import React, {Component} from 'react';
import classNames from 'classnames/bind';

import Pagesstyles from './css/PagesCss.module.css';
import WriteP from './WriteP';

const cx = classNames.bind(Pagesstyles);

const WritePost = ({match}) => {
    return (
        <div>
            <h1 className={cx('title')}>Category: Home</h1>
			<WriteP board={match.params.board}/>
			<h1 className={cx('footer')}>by 20140635 컴퓨터공학과 이원준 </h1>
        </div>
    );
};

export default WritePost;