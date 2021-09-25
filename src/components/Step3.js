import { Typography } from "@material-ui/core";
import React from "react";
import {
  useForm
} from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import FileInput from "./FileInput";
import { Form } from "./Form";
import { MainComponent } from "./MainComponent";
import { PrimaryButton } from "./PrimaryButton";

export const Step3 = () => {
  const history = useHistory();

  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("/result");
    setValues(data);
  };

  return (
    <MainComponent>
      <Typography component="h2" variant="h5">
        Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainComponent>
  );
};
