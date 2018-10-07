import styled, { css } from 'styled-components'	
import { scheme } from '../../../consts/scheme'
import { Col } from 'reactstrap'

export const Img = styled.img`
	object-fit: cover;
`
export const Label = styled.div`
	opacity: 0;
	position: absolute;
	bottom: 100px;
	padding: 6px 20px;
	background-color: rgba(0, 0, 0, 0.7);
	right: 0;
	left: 0;
	color: ${ scheme.whiteBlue };
	font-size: 14px;
	font-weight: 300;
	letter-spacing: .07em;
	line-height: 1.5em;
	transition-timing-function: ease-in;
	transition: 0.1s;
	${props => props.showLabel && css`
		opacity: 1;
	`}
`
export const AwardContainer = styled.div`
	position: absolute;
	display: inline-flex;
	top: 0px;
	left: 54px;
`
export const ProjectContainer = styled(Col)`
	height: ${ props => props.height === 'big' ? 900 : 700 }px;
	margin-bottom: 30px;
`