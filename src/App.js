import React, { Fragment } from "react";
import { GlobalStyles } from "./styles";
import { Button, Input } from "antd";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Button type="primary">Primary</Button>
      <Input placeholder="Basic usage" />
      <h2>Start proyect</h2>
    </Fragment>
  );
};
