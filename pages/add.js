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
            <label htmlFor="title">title</label>
            <Field id="title" type="text" name="title"/>

            <label htmlFor="image">image</label>
            <Field id="image" type="text" name="image"/>

            <label htmlFor="content">content</label>
            <Field id="content" type="text" name="content"/>

            <button type="submit" disabled={isSubmitting}>
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
