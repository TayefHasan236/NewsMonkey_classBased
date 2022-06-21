import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute' , right:'0'}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
            
            <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/106960914-16…72203-JAPAN_DAIWA.jpeg?v=1653521417&w=1920&h=1080" : imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text" ><small className="text-danger">By {!author? "Unknown" : author} on {new Date (date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
