import { yupResolver } from "@hookform/resolvers/yup";
import { FormControlLabel, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import parsePhoneNumberFromString from "libphonenumber-js";
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
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  phone: yup.string(),
});

export const Step2 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    history.push("/step3");
    setValues(data);
  };

  const hasPhone = watch("hasPhone");

  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
      return value;
    }
    return phoneNumber.formatInternational();
  };

  return (
    <MainComponent>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          placeholder="Email"
          type="email"
          id="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              name="hasPhone"
              {...register("hasPhone")}
              color="primary"
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
            />
          }
          label="Do you have a phone"
        />
        {hasPhone && (
          <Input
            {...register("phone")}
            placeholder="Phone"
            type="tel"
            onChange={(e) => {
              e.target.value = normalizePhoneNumber(e.target.value);
            }}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainComponent>
  );
};
