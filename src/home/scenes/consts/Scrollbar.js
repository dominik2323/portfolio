import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars'

export default class Scrollbar extends Component {
	render() {
		const thumbStyle = {
	  		backgroundColor: "#283235",
	  		borderRadius: "3px",
	  		width: "100%", 
	  		height: "100vh"
  		}
		return (
			<Scrollbars
	          renderThumbVertical={({ style, ...props }) => <div { ...props } 
	          style={{ ...style, ...thumbStyle }}/>} 
	          autoHide 
              {...this.props}/>
		);
	}
}
