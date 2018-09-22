import React, { Component } from 'react'
import Header from './home/scenes/consts/Header'
import Footer from './home/scenes/consts/Footer'
import Selectcontent from './home/scenes/Selectcontent'
import { connect } from 'react-redux'

import Scrollbar from './home/scenes/consts/Scrollbar'
import { withRouter } from "react-router-dom";

import { dataLoader } from './home/store/actions'


class Root extends Component {
  componentWillMount() {
    const { loadData } = this.props
    return (loadData())
  }
  render() {
  	
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Scrollbar>
          <Header />
          <Selectcontent />
        </Scrollbar>
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
