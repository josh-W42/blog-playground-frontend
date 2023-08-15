import { FunctionComponent, useState } from "react";
import { LoginBoxComponent, LoginChangeOption } from "./component";
import { useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "./queries";

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

  const [login, { loading, error, data }] = useLazyQuery(LOGIN_USER);

  const performLogin = async () => {
    try {
      login({ variables: { name: userName, password } });
    } catch (error) {
      console.error(error);
    }
  };

  if (data) {
    alert("Success");
  }

  return (
    <LoginBoxComponent
      userName={userName}
      password={password}
      loginTrigger={performLogin}
      onChange={handleChange}
      isLoading={loading}
      error={error ? "Invalid Username or Password" : undefined}
    />
  );
};
