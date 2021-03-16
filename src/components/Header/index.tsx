import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: "#242526" }}
        position="relative"
        className={classes.appBar}
      >
        <Toolbar>
          <div className={classes.popo}>
            <Typography
              variant="h6"
              style={{
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              ToDo Weather
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
