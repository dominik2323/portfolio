import React from 'react';
import { connect } from 'react-redux'
import { selectFilteredProjects } from '../../store/selectors'
import { filterProjectActivator } from '../../store/actions'
import { getProjectFilter } from '../../store/reducer'
import SelectProjectEngine from './Components/'
import { Container, Row } from 'reactstrap'
import Filter from './Components/Components/Filter'
import { scheme } from '../consts/scheme'
import styled from 'styled-components'

const Footer = styled.div`
	padding: 30px 60px;
	display: inline-block;
	background-color: ${ scheme.antracite };
	color: ${ scheme.whiteBlue };
	letter-spacing: .06em;
	text-transform: uppercase;
	font-size: 12px;
	margin-left: 15px;
	cursor: pointer;
`

const SelectProject = ({ featuredProjects, toggleFilter, getProjectFilter, activeFilter }) => {
    return (
		<Container fluid>
		<Row>
			<Filter toggleFilter={ toggleFilter } activeFilter={ activeFilter }/>
		</Row>
		<Row>
			{
				featuredProjects.map((projectData, i) => {
					return (
						<SelectProjectEngine key={ i } projectData={ projectData }/>
					)
				})
			}
		</Row>
		{ activeFilter === 'featured' && 
			<Footer onClick={ () => toggleFilter('all') }>
				zobrazit všechny projekty
			</Footer>
		}
		</Container>
    )
}
export default connect(
	state => ({
		featuredProjects: selectFilteredProjects(state),
		activeFilter: getProjectFilter(state)
	}),
	dispatch => ({
		toggleFilter(tag) {
			dispatch(filterProjectActivator(tag))
		}
	})
)(SelectProject)
