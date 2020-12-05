import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar} from "@material-ui/core";
import Nabvar from "../NavBar/Nabvar";
export const AppBarMUI = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar
        style={{
          width: "100%",
        }}>
        <Nabvar />
      </Toolbar>
    </AppBar>
  );
};
