import "./card-1.css";
import chart from "../../assets/chart.png";
import detail from "../../assets/detail.png";
import chart1 from "../../assets/chart1.png";
import userprofile from "../../assets/userprofile.png";
import statistic from "../../assets/statistic.png";
import chart2 from "../../assets/chart2.png";
import drop from "../../assets/drop.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import messages from "../../assets/messages.png";
import activity from "../../assets/activity.png";
// const [showAll, setShowAll] = useState(false);


export function Card() {
  return (
    <div className="main-card">
      <div className="card">
        <div className="card-top">
          <h3>Visitors</h3>
          <h2>345,678</h2>
        </div>

        <img src={chart} alt="chart" />

      </div>
    </div>
  );
}
function Card1({ icon, title, value }) {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-left">
        <div className="dashboard-card-icon">
          <img src={icon} alt={title} />
        </div>
        <span>{title}</span>
      </div>
      <h4>{value}</h4>
    </div>
  );
}

export function Card2() {
  return (
    <div className="details ">

      <img src={detail} alt="detail" />

      <div className="chart">
        <img src={chart1} alt="chart1" />
      </div>

      <div className="row">
       
        <div className="tag col-xl-4 col-md-12">
          <img src={userprofile} alt="user1" className="profile-img" />
        </div>

        <div className="tag col-xl-8 col-md-12">
          <img src={statistic} alt="user2" className="statistic" />
        </div>


      </div>
    </div>
  );
}

export function Card3(){
  return(
    <>
      {/* RIGHT PANEL - Server Status, Contacts, Messages */}
      <div className="right">
        <div className="d-flex justify-content-between align-items-center">
        <h3>Server Status</h3>
        {/* sirf mobile pe dikhega */}
        <button
          className="btn-close d-lg-none"
          data-bs-dismiss="offcanvas"
        />
      </div>
        <img src={chart2} alt="chart2"/>

        <div className="content">
          <div className="row">
            <div className="col-4"><span>Country</span></div>
            <div className="col-4"><span>Domain</span></div>
            <div className="col-4">
              <img src={drop} alt="drop" className="flip-img"/>
            </div>
            <div className="col-4"><h6>Indonashia</h6></div>
            <div className="col-4"><h6>Website.com</h6></div>
            <div className="col-4"><h6>2.0 mbs</h6></div>
          </div>
        </div>

        <div className="contacts-section">
          <div className="d-flex justify-content-between mb-3">
            <h6>Contacts</h6>
            <small className="view-btn">View All</small>
          </div>

          <div className="row text-center g-3">
            <div className="col-3"><img src={img1} alt="" className="contact-img"/><p>Tony</p></div>
            <div className="col-3"><img src={img2} alt="" className="contact-img"/><p>Karen</p></div>
            <div className="col-3"><img src={img3} alt="" className="contact-img"/><p>Jenifer</p></div>
            <div className="col-3"><img src={img4} alt="" className="contact-img"/><p>Jack</p></div>
            <div className="col-3"><img src={img5} alt="" className="contact-img"/><p>Maria</p></div>
            <div className="col-3"><img src={img6} alt="" className="contact-img"/><p>Johnny</p></div>
            <div className="col-3"><img src={img7} alt="" className="contact-img"/><p>Martin</p></div>
            <div className="col-3"><img src={img8} alt="" className="contact-img"/><p>Josh</p></div>
          </div>

          <div className="messages">
            <img src={messages} alt="messages"/>
            <img src={activity} alt="activity"/>
          </div>
        </div>
      </div>
    </>
  );
}


export default Card1;
