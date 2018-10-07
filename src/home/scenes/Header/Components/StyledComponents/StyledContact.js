import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { scheme } from '../../../consts/scheme'
import React from 'react'

export const ContactInfo = styled.div`
	position: absolute;
	bottom: 80px;
`

export const Navigation = styled(({ active, ...props }) => <Link {...props} />)`
	color: ${ scheme.whiteBlue } !important;
	${ props => props.active && css`
		color: ${ scheme.gray } !important;
	`}
`

export const ContactContainer = styled.div`
	position: fixed;
	right: 0px; top: 0; bottom: 0; left: 70%;
	padding: 130px 150px 130px 100px;  
	background-color: ${ scheme.antracite };
	transition-timing-function: ease-in;
	transition: 0.2s;
	z-index: 10;
	transform: translateX(100%);
	color: ${ scheme.whiteBlue };
	img {
		position: absolute;
		right: 30px;
		top: 43px;
		width: 40px;
		height: auto;
	}
	h1 {
		font-weight: 800;
		font-size: 36px;
		letter-spacing: .03em;
		line-height: 53px;
		font-variant-numeric: oldstyle-nums;
	}
	h3 {
		font-weight: 400;
		font-size: 12px;
		letter-spacing: .07em;
		margin-bottom: 10px;
	}
	${props => props.showInfo && css`
		transform: translateX(0%);
	`}
`