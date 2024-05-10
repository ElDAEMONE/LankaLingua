import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post("http://localhost:3001/login", { email, password }).then(result => { console.log(result)
  //       if (result.data === "Success") { navigate("/translator")}
  //     })
  //     .catch((error) => console.log(error));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result.data);
        if (result.data.message === "Success") {
          localStorage.setItem("token", result.data.token); // Store the token in local storage
          navigate("/translator");
        }
      })
      .catch((error) => console.log(error));
  };

  // return (
  //   <div className=" container">
  //     <div className="flex justify-center items-center mx-auto">
  //       <form className="text-center mt-36" onSubmit={handleSubmit}>
  //         <div className="grid grid-flow-row">
  //           <p className="text-start text-3xl mb-4">Log In to your account</p>
  //           <p className="text-start text-sm mb-4">
  //             Don't have an account?{" "}
  //             <a className="text-[#006494] font-bold" href="/signUp">
  //               Sign Up
  //             </a>{" "}
  //           </p>

  //           <label className=" text-xs text-start font-bold mb-2">Email</label>
  //           <input
  //             className="border border-[#E3E3E3] rounded-sm text-xs h-10 w-80 mb-2 px-4"
  //             type="email"
  //             onChange={(e) => setEmail(e.target.value)}
  //           />

  //           <div className="grid grid-flow-row">
  //             <label className=" text-xs text-start font-bold mb-2">
  //               Password
  //             </label>
  //             <input
  //               className="border border-[#E3E3E3] rounded-sm text-xs h-10 w-80 mb-2 px-4"
  //               type="Password"
  //               onChange={(e) => setPassword(e.target.value)}
  //             />

  //             <button
  //               className="bg-[#006494] w-full text-white rounded-sm mb-2 h-10 font-bold"
  //               type="submit"
  //             >
  //               Log in
  //             </button>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  return (
    <div style={{fontFamily:'Nunito'}} className="container">
      <div className="flex justify-center items-center mx-auto">
        <form className="text-center mt-36" onSubmit={handleSubmit}>
        <div className="grid grid-flow-row">
            <p className="text-start text-3xl mb-4">Log In to your account</p>
            <p className="text-start text-sm mb-4">
              Don't have an account?{" "}
              <a className="text-[#006494] font-bold" href="/signUp">
                Sign Up
              </a>{" "}
            </p>

            <label className=" text-xs text-start font-bold mb-2">Email</label>
            <input
              className="border border-[#E3E3E3] rounded-sm text-xs h-10 w-80 mb-2 px-4"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="grid grid-flow-row">
              <label className=" text-xs text-start font-bold mb-2">
                Password
              </label>
              <input
                className="border border-[#E3E3E3] rounded-sm text-xs h-10 w-80 mb-2 px-4"
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="bg-[#006494] w-full text-white rounded-sm mb-2 h-10 font-bold"
                type="submit"
              >
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
