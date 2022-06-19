import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import axios from "axios";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loader, setLoader] = useState(<Spinner/>);

  let { pagesize, country, category } = props;
  async function fetchdata() {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d9248a4f5a7a44ef9f5815e76ce5bc28&page=${pageNo}&pagesize=${pagesize}}`;
    console.log(pageNo);
    const d = await fetch(url);
    const pdata = await d.json();
    console.log("ek bar");
    setLoading(false);
    setArticles(pdata.articles);
    setTotalResults(pdata.totalResults);
  }

  useEffect(() => {
    fetchdata();
  }, []);
  const handlePrev = async () => {
    setPageNo(pageNo - 1);
  };

  const handleNext = async () => {
    setPageNo(pageNo + 1);
  };

  async function fetchMoreData() {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d9248a4f5a7a44ef9f5815e76ce5bc28&page=${pageNo+1}&pagesize=${pagesize}}`;
    setPageNo(pageNo + 1);
    console.log(url);
    const d = await fetch(url);
    const pdata = await d.json();
    console.log("ek bar");
    setArticles(articles.concat(pdata.articles));
    setTotalResults(pdata.totalResults);
  }
  return (
    <div className="container" style={{ backgroundColor: "#fffdd0" }}>
      <h1 className="text-center text-dark">
        Reepzz Newzz - Top {category[0].toUpperCase() + category.slice(1)}{" "}
        Headlines
      </h1>
      {loading && <Spinner></Spinner>}
      <InfiniteScroll
      hasMore={articles.length!==totalResults}
          dataLength={articles.length}
          next={fetchMoreData}
          loader={articles.length>=totalResults?<h1 className="text-center">No More Results</h1>:loader}
        > 
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={
                    element.title
                      ? element.title.slice(0, 70) + "..."
                      : "UNKNOWN"
                  }
                  description={
                    element.content
                      ? element.content.slice(0, 160) + "..."
                      : "NONE"
                  }
                  imgurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.wsj.net/im-554258/social"
                  }
                  newsUrl={
                    element.url
                      ? element.url
                      : "https://www.wsj.com/articles/fidelitys-crypto-focused-business-plans-tech-hiring-spree-11653991200"
                  }
                  date={
                    element.publishedAt
                      ? element.publishedAt
                      : "2022-05-31T10:00:00Z"
                  }
                >
                  {" "}
                </Newsitem>
              </div>
            );
          },
          
          )}

        {/* {!loading && (
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={pageNo <= 1}
              className="btn btn-secondary "
              onClick={handlePrev}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={pageNo + 1 > 4}
              className="btn btn-secondary mx-3"
              onClick={handleNext}
            >
              Next &rarr;
            </button>
          </div>
        )} */}
        

      </div>
      </InfiniteScroll> 
    </div>
  );
};

News.defaultProps = {
  pagesize: 6,
  country: "in",
  category: "business",
};
News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
