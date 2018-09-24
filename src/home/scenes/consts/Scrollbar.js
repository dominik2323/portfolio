import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars'

export default class Scrollbar extends Component {
	render() {
		const { topOffset } = this.props
		const thumbStyle = {
	  		backgroundColor: "#283235",
	  		borderRadius: "3px",
	  		width: "100%", 
	  		height: "100vh"
  		}
  		const trackStyle = {
  			top: ( topOffset + 4 ) + 'px',// +4
  			right: '3px',
  			width: "6px", 
	  		height: 'calc(100% - ' + ( topOffset + 8 ) + 'px)'// +8
  		}
		return (
			<Scrollbars
	          renderThumbVertical={({ style, ...props }) => <div { ...props } style={{ ...style, ...thumbStyle }}/>} 
	          renderTrackVertical={({ style, ...props }) => <div { ...props } style={{ ...style, ...trackStyle }}/>} 
	          autoHide 
              {...this.props}/>
		);
	}
}
