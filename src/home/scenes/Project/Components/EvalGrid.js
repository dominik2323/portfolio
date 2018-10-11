import React from 'react'
import RenderGridImage from './RenderGridImage'
import RenderGridVideo from './RenderGridVideo'
import { ProjectContent } from './StyledComponents/StyledProjectEngine'
import { Row } from 'reactstrap'

const EvalItem = ({ item }) => {
	switch ( item.type ) {
        case 'image':
        	return <RenderGridImage data={ item }/>
        case 'video':
        	return <RenderGridVideo data={ item }/>
        default:
        	return 'default'
    }
}

const EvalGrid = ({ data }) => {
    return (		
    	<React.Fragment>
		    { data.map(( item, i ) => {
		    	return (
					<ProjectContent key={ i } xl={ item.cols } lg={ item.cols } md={ 12 } sm={ 12 } xs={ 12 }>
				      	<EvalItem item={ item } />
				    </ProjectContent>
		    	)
		    }) }			
    	</React.Fragment>
    )
}
export default EvalGrid
