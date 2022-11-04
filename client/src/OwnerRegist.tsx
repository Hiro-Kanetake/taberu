import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import { newRegister } from "./type";

const DB_URL = process.env.REACT_APP_PUBLIC_URL || "http://localhost:8080";

const OwnerRegist: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<newRegister>({
    defaultValues: {
      last_name: "",
      first_name: "",
      email: "",
      password: "",
      pincode: undefined,
    },
  });
  const onSubmit = (data: any) => {
    const newAccountInfo = data;

    axios.post(`${DB_URL}/account`, newAccountInfo).then((res) => {
      console.log(res);
      const responseCode = res.status;
      if (responseCode === 201) {
        alert("Account created. Welcome to taberu!");
        navigate("/login");
      }
    });
  };

  return (
    <div className="OwnerRegist">
      <h1 className="logo">
        <img src={logo} alt="taberu" />
      </h1>
      <main>
        <h2>Register</h2>
        <div className="formArea_owRegist">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputArea_owRegist">
              <label htmlFor="lastname">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                id="lastname"
                {...register("last_name", { required: "this is required" })}
              />
            </div>
            <div className="inputArea_owRegist">
              <label htmlFor="firstname">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                id="firstname"
                {...register("first_name", { required: "this is required" })}
              />
            </div>
            <div className="inputArea_owRegist">
              <label htmlFor="email">
                E-mail <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "this is required" })}
              />
            </div>
            <div className="inputArea_owRegist">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "this is required" })}
              />
            </div>
            <div className="inputArea_owRegist">
              <label htmlFor="pincode">
                Pincode <span>*</span>
              </label>
              <input
                type="number"
                id="pincode"
                {...register("pincode", { required: "this is required" })}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default OwnerRegist;
