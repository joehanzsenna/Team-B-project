import React from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {

  const displayLoginNotification = () => {
    toast.success("LoggedIn Successful");
  };
  return (
    <div className='App'>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />

    {/* <button onClick={displayLoginNotification}>Log me In</button> */}
  </div>
  )
}

export default Toast