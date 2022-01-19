import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Signup = () => {
  const router = useRouter();

  const handleSubmit = (values, setSubmitting, setError) => {
    (async () => {
      const response = await fetch('https://pr-movies.herokuapp.com/api/user/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password
        })
      });


      if (!response.ok) {
        const message = await response.text();
        setError({ name: message });
        setSubmitting(false);

        return;
      }

      await router.push(`/success/user-created`);
    })();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, { setSubmitting, setErrors }) => handleSubmit(values, setSubmitting, setErrors)}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">login</label>
            <Field id="name" type="text" name="name"/>

            <label htmlFor="email">email</label>
            <Field id="email" type="email" name="email"/>

            <label htmlFor="password">password</label>
            <Field id="password" type="password" name="password"/>

            <button type="submit" disabled={isSubmitting}>
              Zarejestruj
            </button>

            <ErrorMessage name="name"/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
