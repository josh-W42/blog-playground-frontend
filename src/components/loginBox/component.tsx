import { FunctionComponent } from "react";
import { Box, Flex, Label, Text, TextField, Button, SlimBanner } from "gestalt";

export const enum LoginChangeOption {
  UserName,
  Password,
}

interface Props {
  loginTrigger: () => Promise<void>;
  userName: string;
  password: string;
  onChange: (option: LoginChangeOption, value: string) => void;
  isLoading: boolean;
  error?: string;
}

export const LoginBoxComponent: FunctionComponent<Props> = ({
  loginTrigger,
  userName,
  password,
  onChange,
  isLoading,
  error,
}) => {
  return (
    <Box padding={4}>
      <Flex justifyContent="center" width="100%" maxWidth={300}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Flex direction="column" gap={2} width={"100%"}>
            {error ? (
              <SlimBanner
                type="error"
                message={error}
                iconAccessibilityLabel="Error"
                helperLink={{
                  text: "Forgot Password?",
                  accessibilityLabel: "Forgot Password?",
                  href: "",
                }}
              />
            ) : null}
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
              disabled={isLoading}
              hasError={error ? true : false}
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
              disabled={isLoading}
              hasError={error ? true : false}
            />

            <Button
              text={"Login"}
              size="md"
              fullWidth={true}
              color="blue"
              onClick={() => loginTrigger()}
              disabled={isLoading}
            />
            <Button
              size="md"
              text="Create Account"
              fullWidth={true}
              disabled={isLoading}
            />
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};
