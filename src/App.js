import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

//Функционал кнопки отправка данных по адресу POST:
// https://jsonplaceholder.typicode.com/posts
// Требования к запросу: по нажатию "Отправить"
// заблокировать изменение полей, после ответа
// с сервера поменять все поля ввода на
// текстовые поля. Валидация полей:
// Фамилия - "Не более 50 символа",
// Имя - "Не более 31 символа",
// Отчество - "Не более 31 символа",
// Дата рождения - в формате "dd.MM.yyyy",
// Телефон-"Маска “+7(NNN) NNN NN NN”,
// где N – любая цифра",
// E-mail - "валидация email".
// Все поля обязательны, кроме E-mail

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [blockInput, setBlockInput] = useState(false);

  const onSubmit = (data) => {
    setBlockInput(true);
    console.log(data);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div key="nameContainer">
          <input
            {...register("lastName", {
              required: { value: true, message: "Обязательное поле" },
              maxLength: {
                value: 50,
                message: "Фамилия не должна быть длиннее 50 символов",
              },
            })}
            name="lastName"
            type="text"
            placeholder="Фамилия"
            disabled={blockInput}
          />
          <span>{errors.lastName?.message}</span>
          <input
            {...register("firstName", {
              required: { value: true, message: "Обязательное поле" },
              maxLength: {
                value: 31,
                message: "Имя не должна быть длиннее 31 символа",
              },
            })}
            name="firstName"
            type="text"
            placeholder="Имя"
            disabled={blockInput}
          />
          <span>{errors.firstName?.message}</span>
          <input
            {...register("middleName", {
              required: { value: true, message: "Обязательное поле" },
              maxLength: {
                value: 31,
                message: "Имя не должна быть длиннее 31 символа",
              },
            })}
            name="middleName"
            type="text"
            placeholder="Отчество"
            disabled={blockInput}
          />
          <span>{errors.middleName?.message}</span>
        </div>
        <div key="contactContainer">
          <input
            {...register("birthdate", {
              required: { value: true, message: "Обязательное поле" },
            })}
            name="birthdate"
            type="date"
            placeholder="Дата рождения"
            disabled={blockInput}
          />
          <span>{errors.birthdate?.message}</span>
          <div>
            <label>+7</label>
            <input
              {...register("phone", {
                required: { value: true, message: "Обязательное поле" },
                minLength: {
                  value: 10,
                  message: "Номер должен быть не короче 10 символов",
                },
                maxLength: {
                  value: 10,
                  message: "Номер должен быть не длиннее 10 символов",
                },
                pattern: {
                  value: /^-?[0-9]\d*\.?\d*$/i,
                  message: "Номер должен состоять из цифр",
                },
              })}
              name="phone"
              type="tel"
              placeholder="Телефон"
              disabled={blockInput}
            />
            <span>{errors.phone?.message}</span>
          </div>
          <input
            {...register("email", {
              required: false,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Неправильный формат адреса",
              },
            })}
            name="email"
            type="email"
            placeholder="E-mail"
            disabled={blockInput}
          />
          <span>{errors.email?.message}</span>
        </div>
        <button disabled={blockInput}>Submit</button>
      </form>
      <button onClick={handleSubmit}>Errors</button>
    </div>
  );
}

export default App;
