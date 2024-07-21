import React, { useEffect, useState } from "react";
import Newitems from "./Newitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const capitalizeLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title=`${capitalizeLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  //  const handleNext = async () => {
  //     if (!(page + 1 > Math.ceil(totalResults / 20))) {
  //       console.log(page + 1);
  //       setState({loading: true });
  //       const nextPage = page + 1;
  //       await fetchArticlesForPage(nextPage);
  //       setState({ loading: false });
  //     }
  //   };

  //  const handlePrev = async () => {
  //     const prevPage = page - 1;
  //     if (prevPage < 1) return;
  //     setloading(true);
  //     await fetchArticlesForPage(prevPage);
  //     setloading(false);
  //   };

  const updateNews = async () => {
    props.setProgress(10);
    setloading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    props.setProgress(35);
    const data = await fetch(url);
    const parseddata = await data.json();
    setloading(false);
    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    props.setProgress(100);
    // console.log("this is from componentdidmount" + page);
  };
  const fetchMoreData = async () => {
    // console.log("this is form fetchmorepage" + page);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page + 1);
    const data = await fetch(url);
    const parseddata = await data.json();
    // console.log(parseddata);
    setarticles(articles.concat(parseddata.articles || []));
    settotalResults(parseddata.totalResults || 0);
    setloading(false);
  };
  return (
    <>
      <div className="text-center">
        <h1 style={{ marginTop: "80px" }}>
          NewsMonkey - Top {capitalizeLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newitems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default News;
  News.defaultProps = {
    pagesize: 8,
    category: "general",
  };
  
  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
    setProgress: PropTypes.func.isRequired,
    apikey: PropTypes.string.isRequired,
  };
