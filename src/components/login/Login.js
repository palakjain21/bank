import {React, useState} from "react";
import "./login.css";


const Login = () => {
    const [loginUserName, setloginUserName] = useState("");
    const [loginPassword, setloginPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
  
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
  
    const updateUserName = (e) => {
      setloginUserName(e.target.value);
    };
  
    const updatePassword = (e) => {
      setloginPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(loginUserName, loginPassword);
    }
    
    return (
         <div className="formbg">
      <div className="form">
        <div className="title">MY BANK</div>
        <p className="subtitle"> Login into NetBanking!</p>
        <form>
          <label>
            <p className="label"> Username</p>
            <div className="wrapper">
              {" "}
            <input
              className="input"
              type="text"
              name="user name"
              value={loginUserName}
              placeholder="Email"
              onChange={updateUserName}
              required
            />
            </div>
          </label>
          <label>
            <p className="label"> Password</p>{" "}
            <div className="wrapper">
              {" "}
              <input
                className="input"
                type={passwordShown ? "text" : "password"}
                name="password"
                value={loginPassword}
                placeholder="Password"
                onChange={updatePassword}
                required
              />
              {/* <i onClick={togglePasswordVisiblity}>
              <img src="https://img.icons8.com/ios/50/000000/visible--v1.png"/>
              </i> */}
            </div>
          </label>
          <div className="forgot">Forgot password?</div>
          <div>
            <button className="button" type="submit" onClick={onSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    );
    }

    export default Login;