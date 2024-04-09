import { useContext } from "react";
import poster from "./../images/poster.jpg";
import styles from "./moviepage.module.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ItemsFromContext from "./store/moviestore";
const MoviePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.outermostly}>
      <div className={styles.outermost}>
        <div className={styles.imagecontainer}>
          <img src={poster}></img>
        </div>
        <div className={styles.center}>
          <div className={styles.titlecontainer}>All American</div>
          <div className={styles.ratingcontainer}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero animi
            aperiam sit placeat magni architecto consequuntur ad nam quo
            consequatur tempora alias porro qui ex molestiae, deserunt ea atque
            facere.
          </div>
          <div className={styles.buttoncontainer}>
            <button
              class={styles.btn}
              onClick={() => {
                navigate("/form");
              }}
            >
              Book Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoviePage;
