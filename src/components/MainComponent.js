import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const MainComponent = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container
      className={styles.root}
      {...props}
      container="main"
      maxWidth="xs"
    >
      {children}
    </Container>
  );
};
