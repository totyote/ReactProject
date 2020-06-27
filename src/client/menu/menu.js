import React, { Component } from 'react';

const content=[
	{
		id: 'Home',
        icon: 'dashboard',
        label: 'Home',
        to: '/Home/page=1',
    },
    {
		id: 'QnA',
        icon: 'dashboard',
        label: 'Q & A',
        to: '/QnA',
		content: [{
			parentId: 'QnA',
			icon: 'bell',
			label: 'web',
			to: '/QnA/web'
		},
		{
			id: 'lang',
			parentId: 'QnA',
			icon: 'bell',
			label: 'Language',
			content: [{
				parentId: 'lang',
				icon: 'bell',
				label: 'Language',
				to: '/QnA/Language/Lang',
			},
			{
				parentId: 'lang',
				icon: 'bell',
				label: 'Algorithm',
				to: '/QnA/Language/logic',
			},],
		},
		{
			parentId: 'QnA',
			icon: 'bell',
			label: 'Network',
			to: '/QnA/Network'
		},
		{
			parentId: 'QnA',
			icon: 'bell',
			label: 'BlockChain',
			to: '/QnA/BlockChain'
		},
		{
			parentId: 'QnA',
			icon: 'bell',
			label: 'etc',
			to: '/QnA/etc'
		},],
    },
	{
		id: 'Tech',
        icon: 'dashboard',
        label: 'Tech',
        to: '/Tech',
    },
	{
		id: 'Free',
        icon: 'dashboard',
        label: '자유게시판',
        to: '/Freeboard',
    },
	{
		id: 'Jobs',
        icon: 'dashboard',
        label: 'Jobs',
        content: [{
			parentId: 'Jobs',
			icon: 'bell',
			label: '구인',
			to: '/Jobs/employ',
		},
		{
			parentId: 'Jobs',
			icon: 'bell',
			label: '구직',
			to: '/Jobs/employee',
		},],
    },
];


export default content;