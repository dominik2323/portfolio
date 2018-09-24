import React, { Component } from 'react';
import styled, { css } from "styled-components";
import { Grid } from 'react-bootstrap'
import Body from './headerComponents/Body'
import Bio from './headerComponents/Bio'
import { connect } from 'react-redux'
import { 
	isBioOpened, 
	isContactOpened } from '../../store/reducer'
import { 
	toggleBio, 
	toggleContact,
	toggleBioContent } from '../../store/actions'
import {
	selectActiveBioData
} from '../../store/selectors'

const HeaderContainer = styled.div`
	position: absolute;
	top: 0; left: 0; right: 0; 
	background-color: white;
	height: 124px;
	transition-timing-function: ease-in;
	transition: height 0.3s;
	z-index: 3;
	overflow: none;
	${props => props.showBio && css`
		position: fixed;
	`}
`

class Header extends Component {
	render() {
		const { 
			showBio,
			openBio,
			openContact,
			showContact,
			defaultHeader,
			bioContent,
			activeBioData
		} = this.props
		return (
			<HeaderContainer showBio={ showBio }>
				<Grid fluid>
					<Body 
						showBio={ showBio }
						toggleOpenContact={ openContact }
					/>
					<Bio 
						showContact={ showContact }
						toggleOpenBio={ openBio }
						toggleDefaultHeader={ defaultHeader }
						showBio={ showBio }
						toggleBioContent={ bioContent }
						activeBioData={ activeBioData }
					/>						
				</Grid>
			</HeaderContainer>
		);
	}
} export default connect(
	state => ({
		showBio: isBioOpened(state),
		showContact: isContactOpened(state),
		activeBioData: selectActiveBioData(state)		
	}),
	dispatch => ({
		// not just open, but close as well #fixMyName
		openBio(bool) {
			dispatch(toggleBio(bool))
		},
		// not just open, but close as well #fixMyName
		openContact(bool) {
			dispatch(toggleContact(bool))
		},
		defaultHeader(bool) {
			dispatch(toggleBio(bool)),
			dispatch(toggleContact(bool))
		},
		bioContent(id) {
			dispatch(toggleBioContent(id))
		}
	})
)(Header)
