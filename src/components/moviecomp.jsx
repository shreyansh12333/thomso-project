import styles from "./moviecomp.module.css";
import poster from "./../images/poster.jpg";
import { FaArrowLeft } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ItemsFromContext from "./store/moviestore";
const MovieComp = ({ poster, moviedetails }) => {
  const obj = useContext(ItemsFromContext);
  console.log(obj);

  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.movieDetails}>moviedetails</div>
      <div className={styles.imgcontainer}>
        <img src={poster} className={styles.img} alt="offer" />
      </div>
      <div className={styles.title}>
        <div className="title-name">{moviedetails}</div>
        <div className={styles.movieAbout}>
          <center>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </center>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error
            amet possimus ipsum ex perferendis corporis corrupti dolorem,
            explicabo tenetur nihil ad sit odit adipisci commodi.
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.backButton}
          onClick={() => navigate("/moviepage")}
        >
          <FaArrowLeft />
        </button>
      </div>
    </div>
  );
};
export default MovieComp;

/**
 *
 * Array = Movies --> [
 * {
 *  name: "Captain America"
 *  path: "8732"
 *  poster: "image path"
 *  rating: 5 (0 ->  5)
 * },
 * {
 *  name: "" ...
 * }
 * ]
 */
