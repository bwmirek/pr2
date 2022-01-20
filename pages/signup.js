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
            <label htmlFor="name" className={'block text-gray-700 text-sm font-bold mb-2'}>Login</label>
            <Field id="name" type="text" name="name" className={'mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}/>

            <label htmlFor="email" className={'block text-gray-700 text-sm font-bold mb-2'}>E-mail</label>
            <Field id="email" type="email" name="email" className={'mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}/>

            <label htmlFor="password" className={'block text-gray-700 text-sm font-bold mb-2'}>Hasło</label>
            <Field id="password" type="password" name="password" className={'mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}/>

            <button type="submit" disabled={isSubmitting} className={'bg-cyan-700 text-white font-bold py-2 px-4 rounded-xl'}>
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
