import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Add = () => {
  const router = useRouter();

  const handleSubmit = (values, setSubmitting, setError) => {
    (async () => {
      const response = await fetch('https://pr-movies.herokuapp.com/api/movies', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { title: values.title, image: values.image, content: values.content }
        )
      });


      if (!response.ok) {
        const message = await response.text();
        setError({ title: message });
        setSubmitting(false);

        return;
      }

      const json = await response.json();
      await router.push(`/details/${json.id}`);
    })();
  };

  return (
    <div>
      <Formik
        initialValues={{ title: '', image: '', content: '' }}
        onSubmit={(values, { setSubmitting, setErrors }) => handleSubmit(values, setSubmitting, setErrors)}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="title" className={'block text-gray-700 text-sm font-bold mb-2'}>Tytuł</label>
            <Field id="title" type="text" name="title" className={'mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}/>

            <label htmlFor="image" className={'block text-gray-700 text-sm font-bold mb-2'}>Obrazek</label>
            <Field id="image" type="text" name="image" className={'mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}/>

            <label htmlFor="content" className={'block text-gray-700 text-sm font-bold mb-2'}>Opis</label>
            <Field id="content" type="text" name="content" className={'mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}/>

            <button type="submit" disabled={isSubmitting} className={'bg-cyan-700 text-white font-bold py-2 px-4 rounded-xl'}>
              Dodaj
            </button>

            <ErrorMessage name="title"/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
