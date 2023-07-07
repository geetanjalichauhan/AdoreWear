import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: "250px",
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardDescription: {
    marginTop: "15px",
    marginRight: "20px",
  },
}));
