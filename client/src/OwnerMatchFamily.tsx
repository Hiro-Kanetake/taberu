import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonChild from "./components/Button";
import logo from "./assets/logo.png";
import { accountId, pincode } from "./type";

const DB_URL = process.env.REACT_APP_PUBLIC_URL || "http://localhost:8080";

const OwnerMatchFamily: React.FC<accountId> = ({ account_id }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<pincode>({
    defaultValues: {
      pincode: undefined,
    },
  });
  const onSubmit = (data: any) => {
    data.id = account_id
      ? account_id
      : Number(localStorage.getItem("account_id"));
    data.pincode = Number(data.pincode);
    const accountInfo = {
      params: data,
    };
    axios
      .get(`${DB_URL}/account/pincode`, accountInfo)
      .then((res) => {
        if (res.status === 200) {
          alert("You are successfully logged in!");
          navigate("/user/main");
        }
      })
      .catch((error) => {
        alert("Pincode is wrong, please try again");
        console.log(error.response.data);
      });
  };

  return (
    <div className="OwnerMatchFamily">
      <h1 className="logo">
        <img src={logo} alt="taberu" />
      </h1>
      <main>
        <ButtonChild link={"/ChildMenu"} text={"Start as Family"} />
        <div className="formArea_owMatchFamily">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputArea_owMatchFamily">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="number"
                id="pincode"
                placeholder="12345"
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

export default OwnerMatchFamily;
