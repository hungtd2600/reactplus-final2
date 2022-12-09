import React from "react";
import * as yup from "yup";
import Button from "../../components/common/Button/Button";
import TextFeild from "../../components/common/TextField/TextFeild";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUp } from "../../axios/User";
import images from "../../assets/images";
import "./Registration.scss";

const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên"),
  email: yup
    .string()
    .required("Vui lòng nhập Email")
    .email("Chưa đúng định dạng email"),
  password: yup.string().required("Vui lòng nhập mật khẩu").min(4).max(15),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Mật khẩu phải giống nhau"),
});

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const { confirmPassword, ...restData } = data;
    await signUp(restData);
    const dataLogin = await signUp(restData);
    localStorage.setItem("avatar", dataLogin.avatar);
    localStorage.setItem("name", dataLogin.name);
    localStorage.setItem("email", dataLogin.email);
    navigate("/dashboard");
  };
  return (
    <div className="resistation">
      <div className="content-resistation">
        <div className="resistation-image">
          <img src={images.done} alt="" />
        </div>
        <h3>Get’s things done with TODO</h3>
        <p>Let’s help you meet up your tasks</p>
      </div>
      <form className="form-signup" onSubmit={handleSubmit(onSubmit)}>
        <TextFeild
          register={{ ...register("name", { required: true }) }}
          type="text"
          placeholder="Enter your full name"
          err={errors.name?.message}
        />
        <TextFeild
          register={{ ...register("email", { required: true }) }}
          type="text"
          placeholder="Enter your email"
          err={errors.email?.message}
        />
        <TextFeild
          register={{ ...register("password", { required: true }) }}
          type="password"
          placeholder="Enter password"
          err={errors.password?.message}
        />
        <TextFeild
          register={{ ...register("confirmPassword", { required: true }) }}
          type="password"
          placeholder="Confirm Password"
          err={errors.confirmPassword?.message}
        />
        <div style={{ paddingTop: "21px" }}>
          <Button title="Register" />
        </div>
      </form>
      <p className="question">
        Already have an account ?{" "}
        <a alt="#ok" href="#signing" onClick={() => navigate("/login")}>
          {" "}
          Sign In
        </a>
      </p>
    </div>
  );
};

export default Registration;
