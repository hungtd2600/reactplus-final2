import * as yup from "yup";
import React from "react";
import Button from "../../components/common/Button/Button";
import TextFeild from "../../components/common/TextField/TextFeild";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import images from "../../assets/images";
import "./Login.scss";

const schema = yup.object({
  email: yup
    .string()
    .email("Chưa đúng định dạng email")
    .required("Vui lòng nhập Email"),
  password: yup.string().required("Vui lòng nhập mật khẩu").min(4).max(15),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmit = (data) => {
    if (data.email && data.password) {
      localStorage.setItem(
        "avatar",
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/611.jpg"
      );
      localStorage.setItem("name", data.email);
      localStorage.setItem("email", `@${data.email}`);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login">
      <div className="content-login">
        <div className="login-image">
          <img src={images.done} alt="" />
        </div>
        <div className="login-title">
          <h3>Welcome back to </h3>
          <h4>OUR REMINDER</h4>
        </div>
      </div>
      <form className="form-signin" onSubmit={handleSubmit(formSubmit)}>
        <TextFeild
          type="text"
          register={{ ...register("email") }}
          placeholder="Enter your email"
          err={errors.email?.message}
        />
        <TextFeild
          type="password"
          register={{ ...register("password") }}
          placeholder="Enter password"
          err={errors.password?.message}
        />
        <div className="form-button">
          <Button title="Sign In" />
        </div>
      </form>
      <p className="login-question">
        Don’t have an account ?
        <a alt="#ok" href="#signup" onClick={() => navigate("/registration")}>
          {" "}
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
