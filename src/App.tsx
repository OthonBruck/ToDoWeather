import { Button, Typography } from "@material-ui/core";
import React from "react";
import FormToDo from "./components/FormToDo";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <FormToDo />
    </div>
  );
};
export default App;
