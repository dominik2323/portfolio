import React from 'react'
import { Player, ControlBar, BigPlayButton } from 'video-react'

const RenderGridVideo = ({ data }) => {
    return (
        <Player
        	fluid={ false }
        	width={ '100%' }
        	height={ '100%' }
	      	poster={ data.cover }
	      	src={ data.src }
	      	startTime={ data.startTime }>
	    <ControlBar autoHide={ true } />
	    <BigPlayButton position="center" />
	    </Player>
    )
}

export default RenderGridVideo
