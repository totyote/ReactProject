import React from 'react';
import classNames from 'classnames/bind';

import Poststyles from './css/PostcontentCss.module.css';
import temp from './../ContentBox/img/temp.png';

const ps = classNames.bind(Poststyles);

function img(props) {
  return (
	<img src={temp} className={ps('image')}/>
  );
}

export default img;