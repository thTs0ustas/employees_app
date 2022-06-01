import * as Yup from 'yup';
import { useFormik } from 'formik';
import moment from 'moment';

const useEmployeeForm = (addEmployee) => {
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      // .test('attribute', 'Already exists', (value) =>
      //   attributes.every((item) => item.name !== value)
      // )
      .required('Required'),
    birthDate: Yup.string()
      .test(
        'birthDate',
        'Must be over 18 years old!',
        (value) => moment().diff(moment(value), 'years') >= 18
      )
      .required('Required'),
    hasCar: Yup.boolean().required('Required'),
    address: Yup.string().required('Required'),
    attributes: Yup.array().of(Yup.string()),
  });
  return useFormik({
    initialValues: {
      fullName: '',
      birthDate: '',
      hasCar: false,
      address: '',
      attributes: [],
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => addEmployee(values),
  });
};

export { useEmployeeForm };
