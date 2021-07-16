import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { XXL } from "@zendeskgarden/react-typography";
import { cube } from "./math";

const App = () => {
  return (
    <ThemeProvider>
      <XXL>5 cubed is equal to {cube(5)}</XXL>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
