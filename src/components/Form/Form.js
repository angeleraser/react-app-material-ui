import React from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
const Form = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fdfdfd",
        padding: 20,
        flexShrink: "0",
        width: "auto",
      }}>
      <form style={{ width: "30%" }}>
        <h1>Contact Form</h1>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" type="text" />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Message</InputLabel>
          <Input id="email" multiline rows={10} />
        </FormControl>

        <Button variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
