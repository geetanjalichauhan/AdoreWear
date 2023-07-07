import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Badge, Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { CallMissedSharp, ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems, setSearchTerm }) => {
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    setSearchTerm(searchItem);
  }, [searchItem]);

  const classes = useStyles();
  // const width = window.innerWidth();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit">
              <img
                src={logo}
                alt="Commerce.js"
                height="45px"
                className={classes.image}
                component={Link}
                to="/"
              />
            </Typography>

            <div className={classes.navbuttons}>
              <NavLink to="/adore-wear">
                {" "}
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.navbutton}>
                  Home{" "}
                </Button>
              </NavLink>
              <NavLink to="/About">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.navbutton}>
                  About
                </Button>
              </NavLink>
              <NavLink to="/Contactform">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.navbutton}>
                  Contact Us
                </Button>
              </NavLink>
            </div>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(e) => setSearchItem(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart items"
                color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
