import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/src/actions/loginActions'
import { uportConnect } from '/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/src/utils/uport.js'
import { withRouter } from 'react-router-dom'

const ConnectReqID =
  'e8ebbe28b0463ffb02fc63a619abf969ec4d95362f7276b55cc0cb0b5cb21ba0'

class Login extends Component {
  constructor(props) {
    super(props)
    this.connectUport = this.connectUport.bind(this)

    uportConnect.onResponse(ConnectReqID).then((res) => {
      console.log('res.payload')
      console.log(res.payload)
      this.props.actions.connectUport(uportConnect.state)
      this.props.history.push('/confirmLogin')
    })
  }

  connectUport() {
    const reqObj = {
      requested: ['name', 'phone', 'country', 'avatar', 'email'],
      notifications: true,
    }
    console.log(reqObj)
    uportConnect.requestDisclosure(reqObj, ConnectReqID)
  }

  render() {
    return (
      <div>
        <section className="banner-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h4>Caring for better life</h4>
                <h1>Leading the way in medical excellence</h1>
                <p>
                  Earth greater grass for good. Place for divide evening
                  yielding yielding them that. Creeping beginning over gathered
                  brought.
                </p>
                <div className="template-btn mt-3 mr-3">
                  <a onClick={this.connectUport}>Doctor Login</a>
                </div>
                <div className="template-btn mt-6">
                  <a onClick={this.connectUport}>Patient Login</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-feature text-center item-padding">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/feature1.png')}
                    alt=""
                  />
                  <h3>advance technology</h3>
                  <p className="pt-3">
                    Creeping for female light years that lesser can't evening
                    heaven isn't bearing tree appear
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature text-center item-padding mt-4 mt-md-0">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/feature2.png')}
                    alt=""
                  />
                  <h3>comfortable place</h3>
                  <p className="pt-3">
                    Creeping for female light years that lesser can't evening
                    heaven isn't bearing tree appear
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature text-center item-padding mt-4 mt-lg-0">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/feature3.png')}
                    alt=""
                  />
                  <h3>quality equipment</h3>
                  <p className="pt-3">
                    Creeping for female light years that lesser can't evening
                    heaven isn't bearing tree appear
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature text-center item-padding mt-4 mt-lg-0">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/feature4.png')}
                    alt=""
                  />
                  <h3>friendly staff</h3>
                  <p className="pt-3">
                    Creeping for female light years that lesser can't evening
                    heaven isn't bearing tree appear
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="welcome-area section-padding3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="welcome-img">
                  <img
                    src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/welcome.png')}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="welcome-text mt-5 mt-lg-0">
                  <h2>Welcome to our clinic</h2>
                  <p className="pt-3">
                    Subdue whales void god which living don't midst lesser
                    yielding over lights whose. Cattle greater brought sixth fly
                    den dry good tree isn't seed stars were.
                  </p>
                  <p>
                    Subdue whales void god which living don't midst lesser
                    yielding over lights whose. Cattle greater brought sixth fly
                    den dry good tree isn't seed stars were the boring.
                  </p>
                  <a href="#" className="template-btn mt-3">
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="specialist-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-top text-center">
                  <h2>Our specialish</h2>
                  <p>
                    Green above he cattle god saw day multiply under fill in the
                    cattle fowl a all, living, tree word link available in the
                    service for subdue fruit.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-doctor mb-4 mb-lg-0">
                  <div className="doctor-img">
                    <img
                      src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/doctor1.jpg')}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <div className="doctor-name text-center">
                      <h3>ethel davis</h3>
                      <h6>sr. faculty data science</h6>
                    </div>
                    <div className="doctor-text text-center">
                      <p>
                        If you are looking at blank cassettes on the web, you
                        may be very confused at the.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-doctor mb-4 mb-lg-0">
                  <div className="doctor-img">
                    <img
                      src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/doctor2.jpg')}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <div className="doctor-name text-center">
                      <h3>dand mories</h3>
                      <h6>sr. faculty plastic surgery</h6>
                    </div>
                    <div className="doctor-text text-center">
                      <p>
                        If you are looking at blank cassettes on the web, you
                        may be very confused at the.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-doctor mb-4 mb-sm-0">
                  <div className="doctor-img">
                    <img
                      src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/doctor3.jpg')}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <div className="doctor-name text-center">
                      <h3>align board</h3>
                      <h6>sr. faculty data science</h6>
                    </div>
                    <div className="doctor-text text-center">
                      <p>
                        If you are looking at blank cassettes on the web, you
                        may be very confused at the.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-doctor">
                  <div className="doctor-img">
                    <img
                      src={require('/Users/niall/Documents/2019-ca400-lyonsn4/src/MDsmrt/assets/images/doctor4.jpg')}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <div className="doctor-name text-center">
                      <h3>jeson limit</h3>
                      <h6>sr. faculty plastic surgery</h6>
                    </div>
                    <div className="doctor-text text-center">
                      <p>
                        If you are looking at blank cassettes on the web, you
                        may be very confused at the.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.login.uport,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
