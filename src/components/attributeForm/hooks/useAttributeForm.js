import * as Yup from 'yup';
import { useFormik } from 'formik';

const useAttributeForm = (attributes, addAttribute) => {
  const SignupSchema = Yup.object().shape({
    attribute: Yup.string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .test('attribute', 'Already exists', (value) =>
        attributes.every((item) => item.name !== value)
      )
      .required('Required'),
  });
  return useFormik({
    initialValues: {
      attribute: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => addAttribute(values.attribute),
  });
};

export { useAttributeForm };
