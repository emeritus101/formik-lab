import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        checked: ["Subscribe to our newsletter"]
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        <p></p>
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <p></p>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <p></p>
        <label>
          <Field
            type="checkbox"
            name="checked"
            value="Subscribe to our newsletter"
          />
          Subscribe to our newsletter
        </label>
        <p></p>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
