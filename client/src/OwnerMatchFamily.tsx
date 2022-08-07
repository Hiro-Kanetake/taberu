import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// const DB_URL = "https://taberu-server.herokuapp.com" || "http://localhost:8080";
const DB_URL = "http://localhost:8080";

interface test {
  pincode: number;
}

type Props = {
  accountId: number | undefined;
}

const OwnerMatchFamily: React.FC<Props> = ({accountId}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<test>({
    defaultValues: {
      pincode: undefined,
    },
  });
  const onSubmit = (data: any) => {
    // For our pincode check we need pincode AND id
    // Here we somehow need to get hold of id we got logging in and add it to this object
    //    that we will be sending to server
    data.id = accountId; // PLACEHOLDER ID
    data.pincode = Number(data.pincode);
    // console.log(data);
    // return data;
    const accountInfo = {
      params: data,
    };
    axios
      .get(`${DB_URL}/account/pincode`, accountInfo)
      .then((res) => {
        if (res.status === 200) {
          alert("You are successfully logged in!")
          navigate("/OwnerLoginMain");
        }
      })
      .catch((error) => {
        // If we enter this block - there was no match in the database
        // So the user should try again
        alert("Pincode is wrong, please try again")
        console.log("🏮🏮🏮🏮🏮🏮");
        console.log(error.response.data);
      });
  };

  return (
    <div className="OwnerRegist">
      <h1>taberu</h1>
      <main>
        <h1 className="logo">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="pincode">Pincode</label>
          <input
            type="number"
            id="pincode"
            {...register("pincode", { required: "this is required" })}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          <li>
            <a href="#">Mizuki</a>
          </li>
          <li>
            <a href="#">Makoto</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default OwnerMatchFamily;
