import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Spinner from '../common/Spinner'
import ImageItem from './ImageItem'
import { getImages } from '../../actions/imageActions'
import { uportConnect } from '../../utils/uport'

class Images extends Component {
  static propTypes = {
    getImages: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
  }

  logout() {
    uportConnect.logout()
    this.props.actions.connectUport(uportConnect.state)
    this.props.history.push('/')
  }

  componentDidMount = () => {
    this.props.getImages()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.image.images !== nextProps.image.images
  }

  render() {
    let { images, loading } = this.props.image
    let imageItems

    if (images === null || loading) {
      imageItems = <Spinner />
    } else {
      if (images.length > 0) {
        imageItems = images.map((image) => (
          <ImageItem key={image.index} image={image} />
        ))
      } else {
        imageItems = <h4>No images found</h4>
      }
    }

    return (
      <div>
        <section className="banner-area other-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Patient Scans</h1>
                <h4>
                  Upload images to IPFS and store the IPFS hash on the Ethereum
                  Blockchain.
                </h4>
                <h6>
                  <small>
                    Metamask Account{' '}
                    <mark>{this.props.web3.account || 'Not Connected'}</mark>
                  </small>
                </h6>
                <Link to="/uploadimage" className="template-btn mt-3 mr-3">
                  Upload New Scans
                </Link>
                <Link
                  to="/"
                  onClick={this.logout}
                  className="template-btn mt-6"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">{imageItems}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  web3: state.web3,
  image: state.image,
  uport: state.confirmLogin.uport,
})

export default connect(
  mapStateToProps,
  { getImages }
)(Images)
