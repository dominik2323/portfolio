import React, { Component } from 'react';
import * as R from 'ramda'
import styled, { css } from 'styled-components'
import { scheme } from '../../../consts/scheme'

const AwardPlaceholder = styled.div`
	position: relative;
	font-size: 14px;
	color: ${ scheme.white };
	font-weight: 800;
	margin-left: 10px;		
	background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/' x='0px' y='0px' width='106.8px' height='206.8px' viewBox='0 0 106.8 206.8' style='enable-background:new 0 0 106.8 206.8;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23${ props => props.place };%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3Cpolygon class='st0' points='106.8,206.8 53.4,170.5 0,206.8 0,0 106.8,0 '/%3E%3C/svg%3E%0A");
	background-size: 35px 55px;
	width: 35px;
	height: 55px;
	text-align: center;
	padding-top: 15px;
`
const AwardInfo = styled.div`
	position: absolute;
	right: 0px;
	top: 58px;
	display: none;
	opacity: 0;
	width: max-content;
	transition-timing-function: ease-in;
	background-color: ${ props => '#' + props.place };
	transition: 0.1s;
	padding: 5px 14px;
	${ props => props.showAwardinfo && css`
		display: initial;
		opacity: 1;
	`}
`
export default class Awards extends Component {
	constructor(props) {
		super(props)
		this.state={
			awardHover: false
		}
		this.setAwardHover = this.setAwardHover.bind(this)
	}
	selectColor(place) {
		return R.prop(place, scheme)
	}
	setAwardHover(props) {
		this.setState({
			awardHover: !this.state.awardHover
		})
	}
	render() {
	const { awardsData } = this.props
		return (
				<AwardPlaceholder 
					place={ this.selectColor(awardsData.place) }
					onMouseOut={ this.setAwardHover }
					onMouseOver={ this.setAwardHover }
					>
					{ awardsData.place }
					<AwardInfo 
						showAwardinfo={ this.state.awardHover }
						place={ this.selectColor(awardsData.place) }>
						{ awardsData.name }
					</AwardInfo>
				</AwardPlaceholder>
		)
	}
}
