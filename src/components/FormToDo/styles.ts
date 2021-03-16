import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Grid: {
    backgroundColor: "#464646",
    padding: theme.spacing(1),
    border: "2px solid black",
    borderRadius: "5px",
    marginTop: 5,
    color: "#FFFFFF",
    fontSize: 17,
    "& label.Mui-focused": {
      color: "#FFFFFF",
    },
    "& label": {
      color: "#FFFFFF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFFFFF",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#FFFFFF",
    },
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  radio: {
    color: "black",
    "&$checked": {
      color: "#FFFFFF",
    },
  },
  checked: {},
  input: {
    "& div.MuiInputBase-root": {
      color: "white",
    },
  },
  menu: {
    display: "flex",
    alignItems: "center",
  },
}));
export default useStyles;
