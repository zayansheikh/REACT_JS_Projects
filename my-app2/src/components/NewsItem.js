import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,urlToImage,newsUrl,author,publishedAt,source} = this.props
    return (
      <div>
        <div className="card my-5">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"6%"}}>{source}</span>
            <img src={!urlToImage?"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930":urlToImage} className="card-img-top" style={{    height: "240px"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <h7>Author :-</h7>
                <p className="card-text"><small className="text-body-secondary">{!author?"Unknown":author}</small></p>
                <p className="card-text"><small className="text-body-secondary">{publishedAt}</small></p>
                <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read More...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem