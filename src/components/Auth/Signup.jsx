import React, { useRef, useState } from "react";
import "../../styles/auth/auth.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import googleicon from "../../assets/logos_google-icon.png";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";

const schema = yup.object().shape({
  userName: yup.string().required("username is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().min(6).max(15).required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(""),
});

const Signup = () => {
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [load, setLoad] = useState();

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
        `https://bookapi-3arg.onrender.com/signUp`,
        data
      );
      console.log(res);
      setLoad(false);
    } catch (err) {
      console.log(err.response);
      setLoad(false);
    }
  };

  return (
    <div className="signup-container container">
      <div className="container" id="signup">
        <form action="" onClick={handleSubmit(handleSubmitForm)}>
        <div className="mb-3">
              <label htmlFor="username" className="d-block">
                Username
              </label>
              <p>{errors?.userName?.message}</p>

              <input
                type="text"
                placeholder="John Doe"
                name="userName"
                {...register(`userName`)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="d-block">
                Email Address
              </label>
              <p>{errors?.email?.message}</p>

              <input
                type="email"
                placeholder="example@email.com"
                name="email"
                {...register(`email`)}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="d-block">
                Create a Password
              </label>
              <div className="eyediv">
                <input
                  type={show ? "text" : "password"}
                  placeholder="must be 10 characters"
                  name="password"
                  {...register(`password`)}
                />
                {show ? (
                  <AiFillEye
                    className="show-eye"
                    onClick={(e) => {
                      e.stopPropagation()
                      setShow(!show);
                    }}
                    />
                    ) : (
                      <AiFillEyeInvisible
                      className="show-eye"
                      onClick={(e) => {
                      e.stopPropagation()
                      setShow(!show);
                    }}
                  />
                )}
              </div>
              <p>{errors?.password?.message}</p>
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="d-block">
                Confirm Password
              </label>

              <div className="eyediv">
                <input
                  type={confirm ? "text" : "password"}
                  placeholder=""
                  name="confirmPassword"
                  {...register(`confirmPassword`)}
                />
                {confirm ? (
                  <AiFillEye
                    className="show-eye"
                    onClick={() => {
                      setConfirm(!confirm);
                    }}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="show-eye"
                    onClick={() => {
                      setConfirm(!confirm);
                    }}
                  />
                )}
              </div>
              <p>{errors?.confirmPassword?.message}</p>
            </div>
            <button className="d-block continue-button" type="submit">
            {!load ? "Login" : <Spinner/> }

            </button>
            <div className="line mt-4">
              <span className="or">or</span>
            </div>
            <div className="google-btn">
              {" "}
              <img src={googleicon} alt="" />
              Continue with Google
            </div>
   
        </form>
      </div>
    </div>
  );
};

export default Signup;