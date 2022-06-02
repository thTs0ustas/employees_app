import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import moment from 'moment';

const useEmployeeEdit = (employees, editEmployee, id) => {
  useEffect(() => {
    const {
      info: { fullName, birthDate, hasCar, address, attributes },
    } = employees.find((employee) => employee.id === id);
    formik.setValues({ fullName, birthDate, hasCar, address, attributes }, false);
  }, [id]);

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')

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
    attributes: Yup.array()
      .of(Yup.string())
      .test(
        'attributes',
        'Already exists',
        (value) => !employees.info?.attributes.every((item) => value.split('').includes(item))
      ),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      birthDate: '',
      hasCar: false,
      address: '',
      attributes: [],
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => editEmployee(id, values),
  });
  return formik;
};

export { useEmployeeEdit };
