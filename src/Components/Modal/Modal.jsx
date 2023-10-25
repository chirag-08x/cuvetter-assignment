import { useState } from "react";
import htmlImg from "../../assets/skills/skill.svg";
import { useGlobalContext } from "../../context/AppContext";
import { BsArrowRightShort } from "react-icons/bs";
import validator from "validator";

const Modal = () => {
  const {
    state: { rank, percentile, correctAns, totalAns },
    updateScores,
    toggleModal,
  } = useGlobalContext();
  const [values, setValues] = useState({ rank, percentile, score: correctAns });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    const { rank, percentile, score } = values;
    e.preventDefault();
    const isValidRank = validator.isNumeric(rank) && Number(rank) > 0;
    const isvalidPercentile =
      validator.isNumeric(percentile) &&
      Number(percentile) >= 0 &&
      Number(percentile) <= 100;
    const isValidScore =
      validator.isNumeric(score) &&
      Number(score) > 0 &&
      Number(score) <= totalAns;

    if (isValidRank && isValidScore && isvalidPercentile) {
      console.log(values.rank, values.percentile, values.score);
      updateScores(rank, percentile, score);
      toggleModal();
    }
  };

  return (
    <div className="modal-c">
      <div className="modal">
        <div>
          <h1>Update Scores</h1>
          <img src={htmlImg} alt="" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-col">
              <label htmlFor="rank">
                <span>1</span> Update your rank
              </label>
              <input
                type="text"
                name="rank"
                id="rank"
                value={values.rank}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="form-col">
              <label htmlFor="percentile">
                <span>2</span> Update your Percentile
              </label>
              <input
                type="text"
                name="percentile"
                id="percentile"
                value={values.percentile}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="form-col">
              <label htmlFor="score">
                <span>3</span> Update your current score (out of {totalAns})
              </label>
              <input
                type="text"
                name="score"
                id="score"
                value={values.score}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="btn-container">
            <button className="btn cancel" type="button" onClick={toggleModal}>
              Cancel
            </button>
            <button className="btn submit" type="submit">
              Save <BsArrowRightShort />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
