import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

const Contact = () => {
  return (
    <div>
      <h1 className="title">Contact us</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={yup.object({
          name: yup.string().required("Required"),
          email: yup
            .string()
            .required("Required")
            .email("Invalid email address"),
          message: yup.string().required("Required"),
        })}
        onSubmit={(values) => console.log(values)}
      >
        {({errors, touched}) => (
          <Form className="grid grid-cols-[auto,1fr] gap-4 items-start max-w-xl mx-auto">
            {[
              { name: "name", label: "Name:" },
              { name: "email", label: "Email:" },
              { name: "message", label: "Message:" },
            ].map(({ name, label }) => (
              <React.Fragment key={name}>
                <label htmlFor={name} className="text-right">
                  {label}
                </label>
                <div className="">
                  <Field
                    id={name}
                    name={name}
                    className={`w-full py-1 px-4 border bg-white dark:bg-primary rounded-sm focus:outline-dark ${errors[name] && touched[name] ? "border-accent" : "border-dark"}`}
                  />
                  <ErrorMessage
                    name={name}
                    component="p"
                    className="text-accent"
                  />
                </div>
              </React.Fragment>
            ))}
            <button
              type="submit"
              className="button text-sm col-span-2 w-fit ml-auto"
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
