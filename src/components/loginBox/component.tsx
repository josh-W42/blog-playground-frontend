import { FunctionComponent } from "react";
import { Box, Flex, Label, Text, TextField, Button } from "gestalt";

export const enum LoginChangeOption {
  UserName,
  Password,
}

interface Props {
  loginTrigger: () => Promise<void>;
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
    <Box padding={4}>
      <Flex justifyContent="center" width="100%" maxWidth={800}>
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
            />

            <Button
              text="Login"
              size="md"
              fullWidth={true}
              color="blue"
              onClick={() => loginTrigger()}
            />
            <Button size="md" text="Create Account" fullWidth={true} />
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};
