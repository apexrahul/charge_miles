import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// import img4 from "./assets"

function App() {
  const [state, setstate] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState();

  useEffect(() => {
    axios
      .get("https://charge-miles.vercel.app/advertising")
      .then((response) => {
        setstate(response.data);
        console.log("Data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function formateDate(time) {
    const date = new Date(time);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }

  function repeatData(data) {
    return (
      <div>
        <div className="social-data-content">
          <table cellspacing="0" cellpadding="0">
            <thead className="tbl-header">
              <tr>
                <th>Status</th>
                <th>Total Budget</th>
                <th>Remaining Budget</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody className="tbl-content">
              <tr>
                <td>{data.status}</td>
                <td>{data.total_budget}</td>
                <td>{data.remaining_budget}</td>
                <td>{formateDate(data.start_date)}</td>
                <td>{formateDate(data.end_date)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {showModal && selectedModal === data.total_budget && (
          <div className="modal">
            <div>
              <div className="target-audience">
                <h2>Target Audience</h2>
                <div>
                  <div>
                    <p style={{fontWeight: "bold", marginBottom: "1rem"}}>Languages</p>
                    <ul>
                      {data.target_audiance.locations.map((location) => (
                        <li>{location}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{fontWeight: "bold", marginBottom: "1rem"}}>Genders</p>
                    <ul>
                      {data.target_audiance.genders.map((gender) =>
                        gender === "M" ? <li>Male</li> : <li>Female</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <p style={{fontWeight: "bold", marginBottom: "1rem"}}>Age Limit</p>
                    <ul>
                      {data.target_audiance.age_range.map((age) => (
                        <li>{age}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{fontWeight: "bold", marginBottom: "1rem"}}>Interests</p>
                    <ul>
                      {data.target_audiance.interests.map((interest) => (
                        <li>{interest}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="creatives">
                <h2>Creatives</h2>
                <div className="creatives-content">
                  <div>
                  <p>Header : {data.creatives.header}</p>
                <p>Description : {data.creatives.description}</p>
                <a
                  href={data.creatives.url}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  {data.creatives.url}
                </a>
                  </div>
                  <div>
                  <img src={`./${data.creatives.image}`} alt="Logo" />
                  </div>
                </div>
              </div>

              <div className="insights">
                <h2>Insights</h2>
                <table cellspacing="0" cellpadding="0">
                  <thead className="tbl-header">
                    <tr>
                      <th>Impressions</th>
                      <th>Clicks</th>
                      <th>Nanos Score</th>
                      <th>Cost Per Click</th>
                      <th>Click Through Rate</th>
                      <th>Advanced Kpi 1</th>
                      <th>Advanced Kpi 2</th>
                    </tr>
                  </thead>
                  <tbody className="tbl-content">
                    <tr>
                      <td>{data.insights.impressions}</td>
                      <td>{data.insights.clicks}</td>
                      <td>{data.insights.nanos_score}</td>
                      <td>{data.insights.cost_per_click}</td>
                      <td>{data.insights.click_through_rate}</td>
                      <td>{data.insights.advanced_kpi_1}</td>
                      <td>{data.insights.advanced_kpi_2}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <span style={{marginTop: "2rem"}}>
              <button className="btn" onClick={() => closeModal()}>Close</button>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  function openModal(id) {
    console.log("clicked", id);
    setSelectedModal(id);
    setShowModal(true);
  }

  function closeModal() {
    console.log("clicked");
    setSelectedModal();
    setShowModal(false);
  }

  return (
    <div className="main-body-container">
      {state &&
        state.map((data, index) => {
          return (
            <div key={index} className="content-container">
              <div>
                <p>
                  <span>ID: </span>
                  {data.id}
                </p>
                <p>
                  <span>Name: </span>
                  {data.name}
                </p>
                <p>
                  <span>Goal: </span>
                  {data.goal}
                </p>
                <p>
                  <span>Budget: </span>
                  {data.total_budget}
                </p>
                <p>
                  <span>Status: </span>
                  {data.status}
                </p>
              </div>
              {/* changing platforms for fb, insta and google , do break after for comp n clean code*/}

              <div className="social-container">
                <div>
                  {data.platforms.hasOwnProperty("facebook") && (
                    <div className="social-content-box">
                      <span className="modal-detail-opener">
                        <h4>Facebook</h4>
                        <button
                          className="btn"
                          onClick={() =>
                            openModal(data.platforms.facebook.total_budget)
                          }
                        >
                          See Detail
                        </button>
                      </span>
                      {repeatData(data.platforms.facebook)}
                    </div>
                  )}
                </div>
                <div>
                  {data.platforms.hasOwnProperty("instagram") && (
                    <div className="social-content-box">
                      <span className="modal-detail-opener">
                        <h4>Instagram</h4>
                        <button
                          className="btn"
                          onClick={() =>
                            openModal(data.platforms.instagram.total_budget)
                          }
                        >
                          See Detail
                        </button>
                      </span>
                      {repeatData(data.platforms.instagram)}
                    </div>
                  )}
                </div>
                <div>
                  {data.platforms.hasOwnProperty("google") && (
                    <div className="social-content-box">
                      <span className="modal-detail-opener">
                        <h4>Google</h4>
                        <button
                          className="btn"
                          onClick={() =>
                            openModal(data.platforms.google.total_budget)
                          }
                        >
                          See Detail
                        </button>
                      </span>
                      {repeatData(data.platforms.google)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
