import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Awards from './Components/Awards'
import {
	Img,
	Label,
	AwardContainer,
	ProjectContainer 
} from './StyledComponents/StyledSelectProjectEngine'


export default class SelectProjectEngine extends Component {
	constructor(props) {
		super(props)
		this.state = {
			onHover: false
		}
		this.onHoverHandler = this.onHoverHandler.bind(this)
	}
	onHoverHandler(props) {
		this.setState({ onHover: !this.state.onHover })
	}
	render() {
		const { featuredProject } = this.props
		return (
			<ProjectContainer 
				xl={ featuredProject.size === 'big' ? 8 : 4 }
				lg={ featuredProject.size === 'big' ? 8 : 4 }
				md={ 6 } 
				sm={ 12 }
				xs={ 12 }
				height={ featuredProject.size }
				>
				<Link to={ featuredProject.url }>
				{ featuredProject.awards.active && <AwardContainer>
					{
						featuredProject.awards.content.map(( x, i ) => {return <Awards key={ i } awardsData={ x }/>})
					}
				</AwardContainer> }
					<Img 
						src={ featuredProject.landingPageImage.src } 
						alt={ featuredProject.landingPageImage.alt }
						onMouseOver={ this.onHoverHandler }
						onMouseOut={ this.onHoverHandler }
						/>
					<Label showLabel={ this.state.onHover }>{ featuredProject.projectName }</Label>
				</Link>
			</ProjectContainer>
		);
	}
}
