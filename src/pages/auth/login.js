  import { Form, Input } from "antd";
  import Link from "next/link";
  import react from "react";
  import styled from "styled-components";

  export default function LoginPage() {
    return (
      <StyledContainer className="product-area">
        <body>
          <div className="container" id="container">
            <form action="#">
              <div className="logo">
                <img src="../assets/images/logo/logo.svg" alt="Inner Image" />
              </div>
              <div className="social-container">
                {" "}
                <a href="#" className="social">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#" className="social">
                  <i className="fa fa-twitter" />
                </a>
              </div>
              <span />
              <Form layout="vertical">
                <Form.Item>
                  <Input type="email" placeHolder="Цахим шуудан" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Нууц үг" />
                </Form.Item>
              </Form>
              <p>
                <a href="#">Нууц үгээ мартсан уу?</a>
              </p>
              <button>Нэвртэх</button>
              <p>
                <a href="register" className="c5">
                  Бүртгүүлэх?
                </a>
              </p>
            </form>
          </div>
        </body>
      </StyledContainer>
    );
  }
  const StyledContainer = styled.div`
    * {
      box-sizing: border-box;
    }
    .c5 {
      padding: 10px 15px;
      margin-left: 80%;
      font-weight: 600;
      color: #659688;
    }

    .ant-input-suffix {
      position: absolute;
      margin-top: 15px;
      margin-left: 10px;
    }

    body {
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: "Montserrat", sans-serif;
      height: 100vh;
      margin: -20px 0 50px;
    }

    h1 {
      font-size: 72px;
      background: -webkit-linear-gradient(
        rgb(233, 122, 52, 1),
        rgb(154, 51, 190, 1)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 14px;
      font-weight: 100;
      line-height: 20px;
      letter-spacing: 0.5px;
      margin: 15px 0 15px;
    }

    span {
      font-size: 12px;
    }

    a {
      color: #333;
      font-size: 14px;
      text-decoration: none;
      margin: 15px 0;
    }

    .logo {
      width: 135px;
    }

    .social-container {
      margin: 20px 0;
    }

    .social-container a {
      border: 1px solid #dddddd;
      background: rgb(154, 51, 190);
      background: linear-gradient(
        90deg,
        rgba(233, 122, 52, 1) 0%,
        rgba(154, 51, 190, 1) 100%
      );
      border-radius: 50%;
      color: white;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      height: 40px;
      width: 40px;
    }

    button {
      border-radius: 20px;
      border: 1px solid red;
      background: rgb(154, 51, 190);
      background: linear-gradient(
        90deg,
        rgba(233, 122, 52, 1) 0%,
        rgba(154, 51, 190, 1) 100%
      );
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
    }

    button:active {
      transform: scale(0.95);
    }

    button:focus {
      outline: none;
    }

    button.ghost {
      background-color: transparent;
      border-color: #ffffff;
    }

    form {
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      padding: 0 0;
      height: 100%;
      text-align: center;
    }

    input {
      background-color: #eee;
      border: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 100%;
    }

    .container {
      background-color: #fff;
      box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
        0 10px 10px rgba(255, 255, 255, 0.22);
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 100%;
      min-height: 500px;
    }

    .form-container {
      position: absolute;
      top: 0;
      height: 100%;
      transition: all 0.6s ease-in-out;
    }

    .sign-in-container {
      left: 0;
      width: 50%;
      z-index: 2;
    }

    .container.right-panel-active .sign-in-container {
      transform: translateX(100%);
    }

    .sign-up-container {
      left: 0;
      width: 50%;
      opacity: 0;
      z-index: 1;
    }

    .container.right-panel-active .sign-up-container {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show 0.6s;
    }

    @keyframes show {
      0%,
      49.99% {
        opacity: 0;
        z-index: 1;
      }

      50%,
      100% {
        opacity: 1;
        z-index: 5;
      }
    }
    @media (min-width: 800px) {
      body {
        background-color: white;
      }
      .container {
        background-color: white;
        box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
          0 10px 10px rgba(255, 255, 255, 0.22);
        box-shadow: 20px 20px 20px rgb(255, 255, 255, 0.3);
        box-shadow: 10px 10px 20px rgb(0, 0, 0, 0.5);
        padding: 80px 0px;
        position: relative;
        overflow: hidden;
        overflow: hidden;
        width: 30%;
        max-width: 100%;
        min-height: 500px;
      }

      form {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        padding: 0 0;
        height: 100%;
        text-align: center;
      }
    }
  `;
