import React, { useState } from "react";
import "../../styles/Aboutpagecss/AbtSec10.css";
import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Aboutsec10 = () => {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    axios.post("https://bookapi-3arg.onrender.com/subscribe", input);
    toast("Wow so easy!");
  }

  return (
    <div className="Sec10body container">
      <ToastContainer />
      <div className="Sec10flex">
        <div className="Sec10-p">
          <p>Subscribe to our Newsletter for the latest books and updates</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handleSubmit()
          }}
          className="sec10flex23"
        >
          <input
            onChange={(e) => {
              if (!(e.target.value === "")) {
                setInput(e.target.value);
              }
            }}
            type="text"
            placeholder="Your Email Address"
          />
          <div className="subscribe">
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Aboutsec10;
