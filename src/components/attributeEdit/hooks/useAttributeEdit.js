import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';

const useAttributeEdit = (attributes, editAttribute, id) => {
  useEffect(() => {
    const attribute = attributes.find((attribute) => attribute.id === id);
    formik.setValues({ attribute: attribute.name }, false);
  }, [id]);

  const SignupSchema = Yup.object().shape({
    attribute: Yup.string()
      .min(3, 'Too Short!')
      .test('attribute', 'Already exists!', (value) =>
        attributes.every((attribute) => attribute.name !== value)
      )
      .max(30, 'Too Long!'),
  });
  const formik = useFormik({
    initialValues: {
      attribute: attributes.find((attribute) => attribute.id === id).name,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => editAttribute(id, values.attribute),
  });
  return formik;
};

export { useAttributeEdit };
