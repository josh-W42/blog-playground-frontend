import { FunctionComponent, useState } from "react";
import { LoginBoxComponent, LoginChangeOption } from "./component";
import axios from "axios";

export const LoginBox: FunctionComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (option: LoginChangeOption, value: string) => {
    switch (option) {
      case LoginChangeOption.UserName:
        setUserName(value);
        break;
      case LoginChangeOption.Password:
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const performLogin = async () => {
    try {
      const response = await axios.post<boolean>(
        "http://localhost:4000/auth/login",
        {
          name: userName,
          password,
        },
        {
          method: "POST",
        }
      );

      if (response.data) {
        alert("Login Successful");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LoginBoxComponent
      userName={userName}
      password={password}
      loginTrigger={performLogin}
      onChange={handleChange}
    />
  );
};
