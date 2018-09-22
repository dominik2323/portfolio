import React, { Component } from 'react';
import styled, { css } from "styled-components";
import { Grid } from 'react-bootstrap'
import Scrollbar from './Scrollbar'
import Body from './headerComponents/Body'
import Bio from './headerComponents/Bio'
import { connect } from 'react-redux'
import { isBioOpened, isContactOpened } from '../../store/reducer'
import { toggleBio, toggleContact } from '../../store/actions'

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
		overflow: hidden;
		position: fixed;
		height: 100vh;
	`}
`

class Header extends Component {
	render() {
		const { showBio, openBio, openContact, showContact, defaultHeader } = this.props
		return (
			<HeaderContainer showBio={ showBio }>
				<Scrollbar>
					<Grid fluid>
						<Body 
							showBio={ showBio }
							showContact={ showContact }
							toggleOpenBio={ openBio }
							toggleOpenContact={ openContact }
							toggleDefaultHeader={ defaultHeader }
						/>
						<Bio showBio={ showBio }/>						
					</Grid>
				</Scrollbar>
			</HeaderContainer>
		);
	}
} export default connect(
	state => ({
		showBio: isBioOpened(state),
		showContact: isContactOpened(state)		
	}),
	dispatch => ({
		// not just open, but close as well #fixMyName
		openBio: (bool) => {
			dispatch(toggleBio(bool))
		},
		// not just open, but close as well #fixMyName
		openContact: (bool) => {
			dispatch(toggleContact(bool))
		},
		defaultHeader: (bool) => {
			dispatch(toggleBio(bool)),
			dispatch(toggleContact(bool))
		}
	})
)(Header)
