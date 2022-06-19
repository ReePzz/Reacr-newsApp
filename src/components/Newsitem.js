import React from 'react'
import PropTypes from 'prop-types'

function Newsitem(props) {
    let { title, description, imgurl ,newsUrl,date} = props;
  return (
    <div>
      <div className="card my-3 rounded" style={{ width: "24rem" ,height:'30rem', backgroundColor:"#b75922" }}>
        <img src={imgurl} className="card-img-top my-3" alt="..." style={{maxWidth:"22rem", maxHeight:"12rem",alignSelf:'center',marginTop:'0.5rem'}}/>
        <div className="card-body">
          <h5 className="card-title text-dark" >{title}</h5>
          <h6 style={{color:"skyblue"}}>[{date.slice(0,10)}]</h6>
          <p className="card-text text-light">{description}</p>
          <div style={{position:"absolute",bottom:'10px'}}>
          <a href={newsUrl} className="btn-sm btn-primary text-dark" style={{display:"inline",backgroundColor:"orange"}}>
            Read more 
          </a></div>
        </div>
      </div>
    </div>
  )
}

Newsitem.propTypes = {
  title:PropTypes.string,
  description:PropTypes.string,
  imgurl:PropTypes.string,
  newsUrl:PropTypes.string,
  date:PropTypes.string,
}

Newsitem.defaultProps = {
    title:"UNKNOWN",
    description:"UNKNOWN",
    imgurl:"https://images.wsj.net/im-554258/social",
    newsUrl:"https://www.wsj.com/articles/fidelitys-crypto-focused-business-plans-tech-hiring-spree-11653991200",
    date:"2022-05-31T10:00:00Z",
}

export default Newsitem

