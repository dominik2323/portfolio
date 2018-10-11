import React from 'react'
import { ImageTitle } from './StyledComponents/StyledProjectEngine'

const RenderGridImage = ({ data }) => {
    return (
		<React.Fragment>
			{ data.title.active && 
				<ImageTitle inverse={ data.title.inverse }>
					<h1>{ data.title.header }</h1>
					<p>{ data.title.subTitle }</p>
				</ImageTitle> }
			<img src={ window.location.origin + data.src } alt={ data.alt } />
		</React.Fragment>
    )
}

export default RenderGridImage