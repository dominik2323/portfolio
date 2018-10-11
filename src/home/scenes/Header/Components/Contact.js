import React from 'react';
import {
	ContactContainer,
	Navigation,
	ContactInfo,
} from './StyledComponents/StyledContact'
	

// <Navigation to='/' active={ currentPath === '/' } onClick={ () => toggleDefaultHeader(false) }>
// 	Projekty
// </Navigation>
// <Navigation to='/about' active={ currentPath === '/about' } onClick={ () => toggleDefaultHeader(false) }>
// 	O Dominikovi
// </Navigation>

const Contact = ({ showContact, toggleDefaultHeader, currentPath }) => {
    return (
		<div>
			<ContactContainer showInfo={ showContact }>
				<div onClick={ () => toggleDefaultHeader(false) } style={{ cursor: 'pointer' }}>
    				<img src={ (process.env.PUBLIC_URL + '/img/icons/close.svg') } alt=''/>
				</div>
				<ContactInfo>
					<h3>KONTAKT</h3>
					<h1>dominik@tomczik.cz<br />
					775 337 604</h1>
				</ContactInfo>
			</ContactContainer>
		</div>
    )
}

export default Contact;