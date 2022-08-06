import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

interface test {
  pincode: number;
}

function OwnerMatchFamily() {
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
    console.log(data);
    return data;
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
