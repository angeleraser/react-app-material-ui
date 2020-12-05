import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Home, Book, AccountBox } from "@material-ui/icons";
import { Button } from "@material-ui/core";
const navLinks = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Posts",
    icon: Book,
  },
  {
    name: "Contact",
    icon: AccountBox,
  },
];
const Nabvar = () => {
  return (
    <List
      component="nav"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}>
      <ListItem
        style={{
          width: "100%",
        }}
        component="ul"
        className="nav-list">
        {navLinks.map(({ name, icon: Icon }) => (
          <li key={name}>
            {" "}
            <Button color="inherit">
              {name} <Icon />
            </Button>
          </li>
        ))}
      </ListItem>
    </List>
  );
};

export default Nabvar;
