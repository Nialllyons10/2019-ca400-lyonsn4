import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './ImageDetail.css'
import { getImage } from '../../actions/imageActions'

class ImageDetail extends Component {
  componentDidMount() {
    this.props.getImage(this.props.match.params.index)
  }

  render() {
    const image = this.props.image ? this.props.image : {}

    const {
      ipfsHash,
      title,
      patientID,
      description,
      uploadedOn,
      blockHash,
      blockNumber,
      transactionHash,
      transactionIndex,
      cumulativeGasUsed,
      gasUsed,
    } = image

    return (
      <div>
        <section className="banner-area other-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Patient: {patientID}</h1>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="mt-3 mb-3">
            <Link to="/imageHome">Go Back</Link>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3">
                {ipfsHash ? (
                  <img
                    src={`https://ipfs.io/ipfs/${ipfsHash}`}
                    className="card-img-top"
                    alt={`${ipfsHash}`}
                  />
                ) : (
                  <img
                    src="https://api.fnkr.net/testimg/333x180/?text=IPFS"
                    className="card-img-top"
                    alt="NA"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <h6 className="card-title">Patient ID: {patientID}</h6>
                  <p className="card-text">{description}</p>

                  <p className="card-text">
                    <small className="text-muted">
                      Uploaded on {uploadedOn ? uploadedOn : 'N/A'}
                    </small>
                  </p>
                </div>
              </div>

              <a
                target="_blank"
                href={`https://ipfs.io/ipfs/${ipfsHash}`}
                className={`template-btn mt-6 mr-3 ${!ipfsHash && 'disabled'}`}
                role="button"
              >
                View on IPFS
              </a>

              <a
                target="_blank"
                href=""
                className="template-btn mt-6"
                role="button"
              >
                Analyse Scan
              </a>
            </div>
            <div className="col-md-8">
              {/*<h3>IPFS Hash</h3>*/}
              {/*<p>*/}
              {/*  {ipfsHash ? (*/}
              {/*    <a*/}
              {/*      target="_blank"*/}
              {/*      href={`https://ipfs.io/ipfs/${ipfsHash}`}*/}
              {/*      className="lead"*/}
              {/*      role="button"*/}
              {/*    >*/}
              {/*      {ipfsHash}*/}
              {/*    </a>*/}
              {/*  ) : (*/}
              {/*    'N/A'*/}
              {/*  )}*/}
              {/*</p>*/}
              {/*<hr className="my-4" />*/}
              <h3>Scan Analysis</h3>

              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Percentage Chance Of Cancer</th>
                      <td>72%</td>
                    </tr>
                    <tr>
                      <th scope="row">Cancer Present</th>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Blockchain Details</h3>

              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Transaction Hash</th>
                      <td>{transactionHash ? transactionHash : 'N/A'}</td>
                    </tr>
                    <tr>
                      <th scope="row">Transaction Index</th>
                      <td>
                        {transactionIndex || transactionIndex >= 0
                          ? transactionIndex
                          : 'N/A'}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Block Hash</th>
                      <td>{blockHash ? blockHash : 'N/A'} </td>
                    </tr>
                    <tr>
                      <th scope="row">Block Number</th>
                      <td>{blockNumber ? blockNumber : 'N/A'}</td>
                    </tr>
                    <tr>
                      <th scope="row">Gas Used (wei)</th>
                      <td>{gasUsed ? gasUsed : 'N/A'}</td>
                    </tr>
                    <tr>
                      <th scope="row">Cumulative Gas Used (wei)</th>
                      <td>{cumulativeGasUsed ? cumulativeGasUsed : 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  image: state.image.image,
})

export default connect(
  mapStateToProps,
  { getImage }
)(ImageDetail)
