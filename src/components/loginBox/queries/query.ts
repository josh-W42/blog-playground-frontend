import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query loginUser($name: String, $password: String) {
    loginUser(name: $name, password: $password)
  }
`;
