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
				<FilterItems onClick={ () => toggleFilter('featured') } active={ activeFilter === 'featured' }>Nejlepší projekty</FilterItems>
				<FilterItems onClick={ () => toggleFilter('industrialDesign') } active={ activeFilter === 'industrialDesign' }>Průmyslový design</FilterItems>
				<FilterItems onClick={ () => toggleFilter('graphicDesign') } active={ activeFilter === 'graphicDesign' }>Grafický design</FilterItems>
				<FilterItems onClick={ () => toggleFilter('all') } active={ activeFilter === 'all' }>Všechny projekty</FilterItems>
			</FilterContainer>
		);
	}
}
