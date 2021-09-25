import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useData } from "../DataContext";
import { Form } from "./Form";
import { Input } from "./Input";
import { MainComponent } from "./MainComponent";
import { PrimaryButton } from "./PrimaryButton";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

export const Step1 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    history.push("/step2");
    setValues(data);
  };
  return (
    <MainComponent>
      <Typography component="h2" variant="h5">
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          id="firstName"
          placeholder="First Name"
          type="text"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          id="lastName"
          placeholder="Last Name"
          type="text"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainComponent>
  );
};
