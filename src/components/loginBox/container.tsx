import { FunctionComponent } from "react";
import { LoginBoxComponent } from "./component";
import axios from "axios";

export const LoginBox: FunctionComponent = () => {
  const performLogin = async (name: string, password: string) => {
    try {
      const response = await axios.post<boolean>(
        "http://localhost:4000/auth/login",
        {
          name,
          password,
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
  return <LoginBoxComponent />;
};
