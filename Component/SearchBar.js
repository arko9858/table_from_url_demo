import React, { useState, Fragment } from "react";
import { TextField, Grid, Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";

const SearchBar = ({ setData }) => {
  const [url, setUrl] = useState("");

  const [responseMsg, setResponseMsg] = useState(
    "JSON data will be displayed here."
  );

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    if (url && url.length > 0) {
      axios
        .get(url)
        .then((res) => {
          setResponseMsg(JSON.stringify(res.data));
          setData(res.data);
        })
        .catch((err) => setResponseMsg(err.response.statusText));
    }
  };

  return (
    <Fragment>
      <form
        noValidate
        autoComplete="off"
        style={{ width: "100%", margin: "16px 0" }}
      >
        <Grid container spacing={2} direction="row">
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Enter URL"
              variant="outlined"
              size="small"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="subtitle2">URL response</Typography>
      <Paper elevation={1} style={{ margin: "8px 0", padding: "8px " }}>
        <Typography variant="body2">{responseMsg}</Typography>
      </Paper>
    </Fragment>
  );
};

export default SearchBar;
