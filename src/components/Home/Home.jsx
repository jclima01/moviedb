import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getMovies } from "../../redux/actions";
import Card from "../Card/Card";
import { Link,  } from "react-router-dom";
const Home = () => {
  const movies = useSelector((state) => state.movies);
  const searchKey = useSelector((state) => state.searchKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(searchKey));
  }, [searchKey]);

  return (
    <>

      <div className={styles.gridContainer}>
        {movies?.map((movie) => (
          <Link to={`detail/${movie.id}`}>
          <Card
            key={movie.id}
            movie={movie}

          />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
