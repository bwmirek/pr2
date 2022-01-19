import { Formik, Form, Field, ErrorMessage } from 'formik';

const Signin = () => {
  const handleSubmit = (values, setSubmitting, setError) => {
    (async () => {
      const response = await fetch('https://pr-movies.herokuapp.com/api/user/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: values.login,
          password: values.password
        })
      });


      if (!response.ok) {
        const message = await response.text();
        setError({ login: message });
        setSubmitting(false);

        return;
      }

      const json = await response.json();
      localStorage.setItem('auth_token', json.token);
      window.location = '/';
    })();
  };

  return (
    <div>
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={(values, { setSubmitting, setErrors }) => handleSubmit(values, setSubmitting, setErrors)}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="login">login</label>
            <Field id="login" type="text" name="login"/>

            <label htmlFor="password">password</label>
            <Field id="password" type="password" name="password"/>

            <button type="submit" disabled={isSubmitting}>
              Zaloguj
            </button>

            <ErrorMessage name="login"/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
