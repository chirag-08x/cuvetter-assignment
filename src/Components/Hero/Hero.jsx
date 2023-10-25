import skillImg from "../../assets/skills/skill.svg";
import { useGlobalContext } from "../../context/AppContext";
import { analysis } from "../../helper/utils";
import DoughnutChart from "../Chart/Doughnut";
import GoalImg from "../../assets/goal.svg";

const Hero = () => {
  const {
    state: { rank, percentile, correctAns, totalAns },
    toggleModal,
  } = useGlobalContext();

  return (
    <section>
      <p className="w-400 skill-text">Skill Test</p>
      <div className="hero-inner">
        <article>
          <div className="skills">
            <div>
              <img src={skillImg} alt="" />

              <div>
                <h4 className="title">Hypertext Markup Language</h4>
                <p className="subtitle">
                  Questions: 08 | Duration : 15 mins | Submitted on 5 June 2021{" "}
                </p>
              </div>

              <button className="btn" onClick={toggleModal}>
                Update
              </button>
            </div>
          </div>

          <div className="stats">
            <h4 className="title">Quick Statistics</h4>

            <div>
              <div className="record">
                <span>🏆</span>
                <div>
                  <h2>{Number(rank).toLocaleString("en-US")}</h2>
                  <p className="subtitle">YOUR RANK</p>
                </div>
              </div>

              <div className="record">
                <span>📋</span>
                <div>
                  <h2>{percentile}%</h2>
                  <p className="subtitle">PERCENTILE</p>
                </div>
              </div>

              <div className="record">
                <span>✅</span>
                <div>
                  <h2>
                    {String(correctAns).padStart(2, "0")} / {totalAns}
                  </h2>
                  <p className="subtitle">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="graph"></div>
        </article>

        <article>
          <div className="syllabus">
            <h4 className="title">Syllabus wise Analysis</h4>

            <div className="progress-container">
              {analysis.map(({ name, progress, color }, idx) => {
                return (
                  <div key={idx}>
                    <p>{name}</p>
                    <div className="progress">
                      <div style={{ backgroundColor: `${color}50` }}>
                        <div
                          style={{
                            width: `${progress}%`,
                            height: "100%",
                            backgroundColor: color,
                          }}
                          className="progress-bar"
                        ></div>
                      </div>
                      <h4 style={{ color: color }}>{progress}%</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="question">
            <h4 className="title">
              <span>Question Analysis</span>{" "}
              <span style={{ color: "var(--clr-blue-primary)" }}>
                {correctAns} / {totalAns}
              </span>
            </h4>

            <p style={{ fontSize: "14px", color: "var(--clr-grey2)" }}>
              <span style={{ fontWeight: "700" }}>
                You scored {correctAns} questions correct out of {totalAns}.{" "}
              </span>
              <span>However it still needs some improvements</span>
            </p>

            <div className="pie-container">
              <DoughnutChart correct={correctAns} total={totalAns} />
              <img src={GoalImg} alt="" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
