import React from "react";
import { Button, createStyles, makeStyles } from "@material-ui/core";
import { useFeed } from "../../contexts/feed.context";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export const BottomBar = () => {
  const { root } = useStyles();
  const { toggleFeed } = useFeed();
  return (
    <div className={root}>
      <Button variant="contained" color="primary" onClick={toggleFeed}>
        Toggle Feed
      </Button>
    </div>
  );
};
