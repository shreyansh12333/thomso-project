import poster from "./../images/poster.jpg";
import nicklodean from "./../images/nicklodean.jpg";
import Allworng from "./../images/Allworng.jpg";
import Allthat from "./../images/Allthat.jpg";
import Allsaints from "./../images/Allsaints.jpg";
import Allacess from "./../images/Allacess.jpg";
import allrise from "./../images/allrise.jpg";
import AllSouls from "./../images/AllSouls.jpg";
import Allnight from "./../images/Allnight.jpg";

import styles from "./firstpage.module.css";
import MovieComp from "./moviecomp";
import { useContext } from "react";
import ItemsFromContext from "./store/moviestore";
const array = [
  {
    key: 1,
    poster: poster,
    name: "All American",
  },
  {
    key: 2,
    poster: nicklodean,
    name: "Nicklodean",
  },
  {
    key: 3,
    poster: Allworng,
    name: "All Wrong",
  },
  {
    key: 4,
    poster: Allthat,
    name: "All That",
  },
  {
    key: 5,
    poster: AllSouls,
    name: "AllSouls",
  },
  {
    key: 6,
    poster: Allsaints,
    name: "All Saints",
  },
  {
    key: 7,
    poster: allrise,
    name: "All Rise",
  },
  {
    key: 8,
    poster: Allnight,
    name: "All Night",
  },
  {
    key: 9,
    poster: Allacess,
    name: "All Access",
  },
];

const FirstPage = () => {
  const { setId } = useContext(ItemsFromContext);
  return (
    <div className={styles.outermostdiv}>
      {array.map((item) => (
        <MovieComp poster={item.poster} moviedetails={item.name} />
      ))}
    </div>
  );
};
export default FirstPage;
