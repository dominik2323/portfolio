import { Col } from 'reactstrap'
import styled from "styled-components";
import { scheme } from '../../../consts/scheme'

export const Beta = styled(Col) `
	color: ${ scheme.whiteBlue };
	font-size: 11px;
	font-weight: 300;
	letter-spacing: .12em;
	div {
		display: inline-block;
		background-color: ${ scheme.antracite };
		padding: 10px;
	}
	@media (max-width: 575px) {
		margin: 15px 0;
	}
`
export const Burger = styled(Col)`
	cursor: pointer;
	display: inline-block;
	img {
		width: 34px;
		height: auto;
		position: absolute;
		right: 15px; top: 10px;
	}
	@media (max-width: 575px) {
		margin: 15px 0;
	}
`

export const Name = styled(Col)`
	h1 {
		font-size: 21px;
		padding-bottom: 9px;
		a {
			color: ${ scheme.antracite };
		}
		a:hover {
			text-decoration: none;
		}
	}
	h2 {
		font-size: 11px;
		letter-spacing: .12em;
		text-transform: uppercase;
	}
`