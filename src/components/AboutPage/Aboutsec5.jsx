import React from "react";
import ourimg1 from "../../assets/Aboutpagimg/ourimg1.png";
import ourimg2 from "../../assets/Aboutpagimg/ourimg2.png";
import ourimg3 from "../../assets/Aboutpagimg/ourimg3.png";
import oursocial from "../../assets/Aboutpagimg/ourimg1social.png";
import ourimg4 from "../../assets/Aboutpagimg/ourimg4.png";
import ourimg5 from "../../assets/Aboutpagimg/ourimg5.png";
import ourimg6 from "../../assets/Aboutpagimg/ourimg6.png";
import "../../styles/Aboutpagecss/AbtSec5.css";

const Aboutsec5 = () => {
  return (
    <div
      className="secflexbody 
      "
      style={{
        backgroundColor: "white",
        padding: "8% 0% 8% 0%",
      }}
    >
      <div
        className="secflex-cont"
        style={{
          // backgroundColor: "#F1FBFF",
          // paddingTop: "20px",
        }}
      >
        <img src={ourimg1} alt="" width="50%" />
        <h3>Declan Rice</h3>
        <p>CEO/Founder</p>
        <img src={oursocial} alt="" width="30%" />
      </div>
      <div
        className="secflex-cont"
        // style={{
        //   paddingTop: "20px",
        // }}
      >
        <h4>
          <img src={ourimg2} alt="" width="50%" />
        </h4>
        <h3>Maryam Atkinsone</h3>
        <p>Sales and Marketing Manager</p>
        <img src={oursocial} alt="" width="30%" />
      </div>
      <div
        className="secflex-cont"
        // style={{
        //   paddingTop: "20px",
        // }}
      >
        <h4>
          <img src={ourimg3} alt="" width="50%" />
        </h4>
        <h3>Jurgen Klopp</h3>
        <p>Inventory Manager</p>
        <img src={oursocial} alt="" width="30%" />
      </div>

      <div
        className="secflex-cont"
        style={{
          // backgroundColor: "#F1FBFF",
          // paddingTop: "20px",
        }}
      >
        <img src={ourimg4} alt="" width="50%" />
        
        <h3>Book Curator</h3>

        <p>Book Curator</p>
        <img src={oursocial} alt="" width="30%" />
      </div>
      <div
        className="secflex-cont"
        // style={{
        //   paddingTop: "20px",
        // }}
      >
        <h4>
          <img src={ourimg5} alt="" width="50%" />
        </h4>
        <p>
          <b>Nathan Ake</b>
        </p>
        <p>Data Analyst</p>
        <img src={oursocial} alt="" width="30%" />
      </div>
      <div
        className="secflex-cont"
        // style={{
        //   paddingTop: "20px",
        // }}
      >
        <h4>
          <img src={ourimg6} alt="" width="50%" />
        </h4>
        <p>
          <b>Lilian Robinson</b>
        </p>
        <p>Customer Service Representative</p>
        <img src={oursocial} alt="" width="30%" />
      </div>
    </div>
  );
};

export default Aboutsec5;
