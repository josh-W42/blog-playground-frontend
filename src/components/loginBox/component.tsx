import { FunctionComponent } from "react";
import { Box, Flex, Label, Text, TextField, Button } from "gestalt";

const enum LoginChangeOption {
  UserName,
  Password,
}

interface Props {
  loginTrigger: () => void;
  userName: string;
  password: string;
  onChange: (option: LoginChangeOption, value: string) => void;
}

export const LoginBoxComponent: FunctionComponent<Props> = ({
  loginTrigger,
  userName,
  password,
  onChange,
}) => {
  return (
    <Flex justifyContent="center" height="100" width="100%">
      <form onSubmit={(e) => e.preventDefault()}>
        <Flex direction="column" gap={2}>
          <Label htmlFor="username">
            <Text>Username</Text>
          </Label>

          <TextField
            id="username"
            onChange={({ value }) => {
              onChange(LoginChangeOption.UserName, value);
            }}
            value={userName}
            autoComplete="username"
            type="text"
            // placeholder=""
          />

          <Label htmlFor="password">
            <Text>Password</Text>
          </Label>

          <TextField
            id="password"
            onChange={({ value }) => {
              onChange(LoginChangeOption.Password, value);
            }}
            value={password}
            autoComplete="off"
            type="password"
            // placeholder=""
          />

          <Button text="Login" size="lg" color="blue" />
          <Button size="sm" text="Don't have an Account?" />
        </Flex>
      </form>
    </Flex>
  );
};
