import React, { Component } from 'react'
import Header from './home/scenes/Header'
import Selectcontent from './home/scenes'
import { connect } from 'react-redux'

import Scrollbar from './home/scenes/consts/Scrollbar'
import { withRouter } from "react-router-dom";

import { dataLoader } from './home/store/actions'
import { getLoadingStatus } from './home/store/reducer'

class Root extends Component {
  componentDidMount() {
    const { loadData } = this.props
    return loadData()
  }
  render() {
    console.log('env', process.env.REACT_APP_API_URL);
    const { isLoading } = this.props
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Scrollbar topOffset={ 124 }>
          <Header />
          <Selectcontent isLoading={ isLoading } />
        </Scrollbar>
      </div>
    );
  }
} export default withRouter(connect(
  state => ({
    getUrl: state.router.location.pathname,
    isLoading: getLoadingStatus(state)
  }),
  dispatch => ({
    loadData() {
      dispatch(dataLoader())
    }
  }),
)(Root))
