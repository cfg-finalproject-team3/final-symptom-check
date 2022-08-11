import { makeStyles } from "@material-ui/core/styles";

const paperStyle = makeStyles((theme) => ({
  paper: {
    padding: 50,
    height: "auto",
    width: 526,
    margin: "20px auto",
    // backgroundColor: "#f5f5f5",
    backgroundColor: "#f5f5f5 !important",

    borderRadius: "5% !important",
    color: "#070C3A",
  },

  btnStyle: {
    borderRadius: 15,
    backgroundColor: "#2368AD",
    marginTop: 20,
    textTransform: "none",
  },
  formLink: { color: "#00069a", textDecoration: "underline" },
  typography: {
    fontFamily: "Montserrat",
  },
  // textField: {
  //   fontFamily: "Montserrat",
  //   paddingLeft: "50px",
  //   paddingRight: "50px",
  // },
}));

export default paperStyle;
