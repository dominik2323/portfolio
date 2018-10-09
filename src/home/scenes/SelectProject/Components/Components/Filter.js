import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const FilterContainer = styled.ul`
	list-style: none;
	padding: 0;
	display: block;
	letter-spacing: .02em;
`
const FilterItems = styled.li`
	cursor: pointer;
	float: left;
	margin: 0 15px;
	${ props => props.active && css`
		border-bottom: 1px solid black;
	`}
`

export default class Filter extends Component {
	render() {
		const { toggleFilter, activeFilter } = this.props
		return (
			<FilterContainer>
				<FilterItems onClick={ () => toggleFilter('breakfast') } active={ activeFilter === 'breakfast' }>Snídaně</FilterItems>
				<FilterItems onClick={ () => toggleFilter('brunch') } active={ activeFilter === 'brunch' }>Svačiny / malá jídla</FilterItems>
				<FilterItems onClick={ () => toggleFilter('soups') } active={ activeFilter === 'soups' }>Polévky</FilterItems>
				<FilterItems onClick={ () => toggleFilter('lunch') } active={ activeFilter === 'lunch' }>Hlavní chody</FilterItems>
				<FilterItems onClick={ () => toggleFilter('desserts') } active={ activeFilter === 'desserts' }>Dezerty</FilterItems>
			</FilterContainer>
		);
	}
}
