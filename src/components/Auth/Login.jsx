import React, { useRef, useState } from "react";
import "../../styles/auth/auth.css";
import { IoMdClose } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import googleicon from "../../assets/logos_google-icon.png";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import Toast from "../DashboardComponents/Toast";

const schema = yup.object().shape({
  userName: yup.string().required("username is required"),
  password: yup.string().min(6).max(15).required("password is required"),
});

const Login = () => {
  const [load, setLoad] = useState();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (data) => {
    console.log(data);
    try {
      setLoad(true);
      const res = await axios.post(
        `https://bookapi-3arg.onrender.com/signIn`,
        data
      );
      console.log(res);
      // localStorage.setItem("currentUser").JSON.stringify(res.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <div className="signup-container container">
      <div className="container" id="signup">
        <div>
          <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="mb-3">
              <span>{errors?.userName?.message}</span>
              <label htmlFor="username" className="d-block">
                Username
              </label>

              <input
                type="text"
                placeholder="John Doe"
                name="userName"
                {...register(`userName`)}
              />
            </div>

            <div>
              <label htmlFor="password" className="d-block">
                Password
              </label>
              <span>{errors?.password?.message}</span>

              <div className="eyediv">
                <input
                  type={show ? "text" : "password"}
                  placeholder=".........."
                  className="login-input"
                  name="password"
                  {...register(`password`)}
                />
                {show ? (
                  <AiFillEye
                    className="show-eye"
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="show-eye"
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                )}
              </div>

              <button className="d-block continue-button" type="submit">
                {!load ? "Login" : <Spinner />}
              </button>
              <div className="line mt-4">
                <span className="or">or</span>
              </div>
              <button className="google-btn">
                {" "}
                <img src={googleicon} alt="" />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
