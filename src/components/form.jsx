import { useRef } from "react";
import styles from "./form.module.css";
// import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const nameInput = useRef("");
  const contactNo = useRef("");
  const movieName = useRef("");
  const noOfTickets = useRef("");
  const handleClick = (event) => {
    event.preventDefault();
    nameInput.current.value = "";
    contactNo.current.value = "";
    movieName.current.value = "";
    noOfTickets.current.value = "";
  };
  return (
    <div className={styles.outerMost}>
      <div className={styles.containing}>
        <div className={styles.crossContainer}>
          <div>
            <button
              className={styles.btn}
              onClick={() => {
                navigate("/moviepage");
              }}
            >
              <ImCross />
            </button>
          </div>
        </div>
        <form>
          <div className={styles.container}>
            <label className={styles.label}>Name:</label>
            <input className={styles.input} ref={nameInput} />
            <label className={styles.label}>Contact Number:</label>
            <input className={styles.input} type="number" ref={contactNo} />
            <label className={styles.label}>Movie Name:</label>
            <input
              placeholder="movie Name"
              className={styles.input}
              ref={movieName}
            />

            <label className={styles.label}>No of tickets:</label>
            <input className={styles.input} type="number" ref={noOfTickets} />
            <button className={styles.button} onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
