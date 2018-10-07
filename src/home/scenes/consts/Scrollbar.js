import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars'
import { scheme } from './scheme'

export default class Scrollbar extends Component {
	render() {
		const { topOffset, ...props } = this.props
		const thumbStyle = {
	  		backgroundColor: scheme.antracite,
	  		borderRadius: "3px",
	  		width: "100%", 
	  		height: "100vh"
  		}
  		const trackStyle = {
  			top: ( topOffset + 4 ) + 'px',
  			right: '3px',
  			width: "6px", 
	  		height: 'calc(100% - ' + ( topOffset + 8 ) + 'px)'
  		}
		return (
			<Scrollbars
	          renderThumbVertical={({ style, ...props }) => <div { ...props } style={{ ...style, ...thumbStyle }}/>} 
	          renderTrackVertical={({ style, ...props }) => <div { ...props } style={{ ...style, ...trackStyle }}/>} 
	          autoHide 
              { ...props }/>
		);
	}
}
