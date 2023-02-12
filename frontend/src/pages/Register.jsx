import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
  return (
    <Formik
      initialValues={{ email: "", name: "", password: "", confirmPwd: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Adres e-mail ma niewłaściwy formtat.")
          .required("Proszę podać adres e-mail"),
        name: Yup.string()
          .max(25, "Pole nie może zawierać więcej, niż 25 znaków")
          .required("Pole nie może być puste"),
        password: Yup.string()
          .min(8, "Hasło nie może być ktrótsze niż 8 znaków")
          .required("Pole nie może być puste."),
        confirmPwd: Yup.string()
          .oneOf([Yup.ref("password"), null], "Hasła muszą być identyczne.")
          .min(8, "Hasło nie może być ktrótsze niż 8 znaków")
          .required("Pole nie może być puste."),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      <Form className="w-1/3 mx-auto my-3 space-y-5">
        <div className="form-cotrol w-full max-w-sx">
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Adres e-mail"
            tooltip="Adres e-mail"
            className="input input-bordered w-full"
          />
          <br />
          <span className="text-xs text-right text-red-400 block">
            {" "}
            <ErrorMessage name="email" />
          </span>
        </div>
        <div className="form-cotrol w-full max-w-sx">
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Imię i nazwisko"
            className="input input-bordered w-full"
          />
          <br />
          <span className="text-xs text-right text-red-400 block">
            {" "}
            <ErrorMessage name="name" />
          </span>
        </div>
        <div className="form-cotrol w-full max-w-sx">
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Hasło"
            className="input input-bordered w-full"
          />
          <br />
          <span className="text-xs text-right text-red-400 block">
            <ErrorMessage name="password" />
          </span>
        </div>
        <div className="form-cotrol w-full max-w-sx">
          <Field
            type="password"
            id="confirmPwd"
            name="confirmPwd"
            placeholder="Powtórz hasło"
            className="input input-bordered w-full"
          />
          <br />
          <span className="text-xs text-right text-red-400 block">
            <ErrorMessage name="confirmPwd" />
          </span>
        </div>
        <button type="submi" className="btn btn-success my-2">
          Rejestarcja
        </button>
      </Form>
    </Formik>
  );
}

export default Register;
