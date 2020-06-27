import React, {Component} from 'react';
import classNames from 'classnames/bind';

import Sidestyles from './css/SideCss.module.css';

const cx = classNames.bind(Sidestyles);

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
	<div className={cx('Content')}>
		<input className={cx('input')}
		placeholder="검색..." value={value} onChange={onChange} onKeyPress={onKeyPress}/>
	</div>
	
  );
};

export default Form;