import { FunctionComponent } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { LoginPage } from "./pages";

export const App: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" element={<div></div>} />
      <Route path="/login" element={<LoginPage />} />
    </Switch>
  );
};
