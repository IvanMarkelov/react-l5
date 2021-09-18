import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    formState: { errors, submitCount },
    handleSubmit,
  } = useForm();
  const onSubmit = (e) => console.log(e);
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <input {...register("lastName", { required: true, minLength: 3 })} />
        {errors.lastName && <span>Last name is required</span>}

        <input {...register("age", { required: true, max: 35, min: 18, pattern: /\d\d/ })} />
        {errors.age && <span>Age is required (18+)</span>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
