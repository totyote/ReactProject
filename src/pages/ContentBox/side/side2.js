import React, {Component} from 'react';
import classNames from 'classnames/bind';

import Sidestyles from './css/SideCss.module.css';

const cx = classNames.bind(Sidestyles);

export default function MediaCard() {
  return (
    <div className={cx('Content')}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
  );
}