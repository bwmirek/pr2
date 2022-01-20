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
            <label htmlFor="login" className={'block text-gray-700 text-sm font-bold mb-2'}>Login</label>
            <Field id="login" type="text" name="login" className={'mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}/>

            <label htmlFor="password" className={'block text-gray-700 text-sm font-bold mb-2'}>Hasło</label>
            <Field id="password" type="password" name="password" className={'mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}/>

            <button type="submit" disabled={isSubmitting} className={'bg-cyan-700 text-white font-bold py-2 px-4 rounded-xl'}>
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
