import React from 'react';
import styled from "styled-components";
import { Container } from 'reactstrap'
import Body from './Components/Body'
import Contact from './Components/Contact'
import { connect } from 'react-redux'
import { scheme } from '../consts/scheme'
import { 
	isContactOpened,
} from '../../store/reducer'
import { 
	toggleContact,
} from '../../store/actions'
import {
	getPathname
} from '../../store/selectors'

const HeaderContainer = styled.div`
	position: absolute;
	top: 0; left: 0; right: 0; 
	background-color: ${ scheme.white };
	transition-timing-function: ease-in;
	transition: height 0.3s;
	z-index: 3;
`

const Header = ({ openContact, showContact, defaultHeader, currentPath }) => {
    return (
		<HeaderContainer>
			<Container fluid>
				<Body 
					toggleOpenContact={ openContact }
				/>
				<Contact 
					showContact={ showContact }
					toggleDefaultHeader={ defaultHeader }
					currentPath={ currentPath }
				/>						
			</Container>
		</HeaderContainer>
    )
}

export default connect(
	state => ({
		showContact: isContactOpened(state),
		currentPath: getPathname(state)
	}),
	dispatch => ({
		openContact(bool) {
			dispatch(toggleContact(bool))
		},
		defaultHeader(bool) {
			dispatch(toggleContact(bool))
		},
	})
)(Header)