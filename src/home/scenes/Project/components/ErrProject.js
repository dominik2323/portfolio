import React, { Component } from 'react';
import { Row, Container } from 'reactstrap'
import { 
	Img,
	DeadContainer,
	Router } from './StyledComponents/StyledErrProject'

export default class ErrProject extends Component {
	render() {
		return (
			<Router to='/'>
				<Container fluid>
					<Row>
						<DeadContainer md={{ size: 6, offset: 3 }}>
							<p>Tato stránka bohužel neexistuje. Pokračujte kliknutím na hlavní stránku.</p>
		    				<Img src={ (process.env.PUBLIC_URL + '/img/icons/dead.svg') } />
						</DeadContainer>
					</Row>
				</Container>
			</Router>
		);
	}
}
