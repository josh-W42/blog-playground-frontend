import { FunctionComponent } from "react";
import { LoginBox } from "../../components";
import { Box } from "gestalt";

export const LoginPage: FunctionComponent = () => {
  return (
    <Box width={"100%"}>
      <h1>This is the login page</h1>
      <LoginBox />
    </Box>
  );
};
