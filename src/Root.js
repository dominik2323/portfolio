import React, { Component } from 'react'
import Header from './home/scenes/Header'
import Selectcontent from './home/scenes'
import { connect } from 'react-redux'

import Scrollbar from './home/scenes/consts/Scrollbar'
import { withRouter } from "react-router-dom";

import { dataLoader } from './home/store/actions'

class Root extends Component {
  componentWillMount() {
    const { loadData } = this.props
    return loadData()
  }
  componentDidMount() {
    return null
  }
  render() {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Scrollbar topOffset={ 124 }>
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
    loadData() {
      dispatch(dataLoader())
    }
  }),
)(Root))
