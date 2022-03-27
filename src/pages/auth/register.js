import { Form, Input } from "antd";
import Link from "next/link";
import react from "react";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <StyledContainer className="product-area">
      <body>
        <div className="container10">
          <form action="#">
            <h1>Log In</h1>
            <span />
            <Form layout="vertical">
              <Form.Item>
                <Input type="email" placeHolder="Цахим шуудан" />
              </Form.Item>
              <Form.Item>
                <Input.Password placeholder="Нууц үг" />
              </Form.Item>
            </Form>
            <p>
              <a href="#">Нууц үгээ мартсан уу?</a>
            </p>
            <button>Нэвртэх</button>
            <p className="space1">
              <a href="#">Нууц үгээ мартсан уу?</a>
            </p>
            <div className="social-container10">
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
            <h5>
              <a href="#">Та бүртгүүлээгүй юу? Бүртгүүлэх</a>
            </h5>
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
  .space1 {
    margin-top: 40%;
  }
  .ant-input-suffix {
    position: absolute;
  }
  body {
    background: #24253c;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    color: #818495;
    height: 100vh;
    margin: -20px 0 0px;
  }

  h1 {
    font-size: 72px;
    background: -webkit-linear-gradient(
      rgb(233, 122, 52, 1),
      rgb(154, 51, 190, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
    float: left;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 15px 0 15px;
  }

  .social-container10 {
    margin: 0px 0;
  }

  .social-container10 a {
    border: 1px solid #dddddd;
    background: rgb(154, 51, 190);
    background: linear-gradient(
      90deg,
      rgba(233, 122, 52, 1) 0%,
      rgba(154, 51, 190, 1) 100%
    );
    color: white;
    font-size: 1.2em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    height: 40px;
    width: 40px;
  }

  button {
    background: rgb(154, 51, 190);
    background: linear-gradient(
      90deg,
      rgba(233, 122, 52, 1) 0%,
      rgba(154, 51, 190, 1) 100%
    );
    border-radius: 40px;
    width: 70%;
    border: 1px solid red;
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
    background-color: #24253c;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 0 0;
    height: 100%;
  }

  input {
    background-color: #eee;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
  Form.Item input {
    width: 90%;
  }
  .container10 {
    background-color: black;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    min-height: 400px;
  }
  .container10 h2 {
    float: left;
    font-size: 40px;
  }
`;
