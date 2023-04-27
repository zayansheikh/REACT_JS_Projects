import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from '../Spinner';
import PropTypes  from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super();
    // console.log("Hello i am constructer");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url = `
    https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b08d91886103424098f0ffe978d9ad7a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    // console.log(parsedData)
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }
  handlePrevious = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b08d91886103424098f0ffe978d9ad7a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    // console.log(parsedData)

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    })
    
  }
  handleNext = async()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b08d91886103424098f0ffe978d9ad7a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      // console.log(parsedData)
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      })
    }
    }
    render() {
    return(
      <div className="container">
          <h2 className="text-center bg-dark text-white" style={{marginTop:"35px"}}>My News - Top Headlines</h2>
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0,50)} description = {element.description.slice(0,90)} urlToImage={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
              </div>
            })}
          </div>
            {this.state.loading && <Spinner/>}
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>
        </div>
    )
  }
}

export default News