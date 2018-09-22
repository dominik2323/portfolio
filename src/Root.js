import React, { Component } from 'react'
import Header from './home/scenes/consts/Header'
import Footer from './home/scenes/consts/Footer'

import Project from './home/scenes/Project/Project'
import SelectProject from './home/scenes/SelectProject/SelectProject'
import { connect } from 'react-redux'

import { Scrollbars } from 'react-custom-scrollbars'
import { Route, withRouter } from "react-router-dom";

import { dataLoader } from './home/store/actions'


class Root extends Component {
  componentWillMount() {
    const { loadData } = this.props
    return (loadData())
  }
  render() {
  	const thumbStyle = {
  		backgroundColor: "#283235",
  		borderRadius: "3px"
  	}
    return (
      <div>
        <Scrollbars 
          style={{ "width": "100%", "height": "100vh" }} 
          renderThumbVertical={({ style, ...props }) => <div { ...props } 
          style={{ ...style, ...thumbStyle }}/>} 
          autoHide>
        <Header />
        
        <Route exact path="/" component={ SelectProject } />
        <Route exact path="/project/:projectId" component={ Project } />
        </Scrollbars>
      </div>
    );
  }
} export default withRouter(connect(
  state => ({
    getUrl: state.router.location.pathname
  }),
  dispatch => ({
    loadData: () => {
      dispatch(dataLoader())
    }
  }),
)(Root))
