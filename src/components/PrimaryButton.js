import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const PrimaryButton = ({ children, props }) => {
  const styles = useStyles();
  return (
    <Button
      type="submit"
      {...props}
      className={styles.root}
      fullWidth
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};
