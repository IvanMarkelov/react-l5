import { Button, Elevation, Card, ControlGroup, H1, InputGroup, Label, Colors } from "@blueprintjs/core";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./App.css";
import content from "./content";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your name"),
  password: yup.string().required("Please enter your password").min(5, "The password should be at least 5 characters long"),
  email: yup.string().required("Please enter your email").email("Please enter your email"),
});

function App() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(formState.errors);
    console.log(register);
  };

  const showErrors = (e) => {
    console.log(formState.errors);
  };

  return (
    <Card style={{maxWidth: "50%", margin: "0 auto" }} interactive={true} elevation={Elevation.TWO}>
      <H1>React-hook-form</H1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <ControlGroup fill={true} vertical={true} key={key}>
              <Label>{input.label}</Label>
              <InputGroup 
                type={input.type}
                name={input.name}
                {...register(input.name)}
              />
              <span style={{color: Colors.RED2}}>{formState.errors[input.name]?.message}</span>
            </ControlGroup>
          );
        })}
        <Button type="submit">Login</Button>
      </form>
      <Button onClick={showErrors}>Show Errors</Button>
    </Card>
  );
}

export default App;
