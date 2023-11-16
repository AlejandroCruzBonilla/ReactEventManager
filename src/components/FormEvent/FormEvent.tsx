import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidV4 } from 'uuid';
import { FC } from 'react';
import { FormEventProps } from './interfaces';

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('The name is Required'),
  date: Yup.date()
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      'The date must be equal to or later than today'
    )
    .required('The Date is Required'),
  hour: Yup.string().matches(
    /^([01]\d|2[0-3]):([0-5]\d)$/,
    'The time format must be hh:mm'
  ),
  description: Yup.string(),
  location: Yup.string(),
});

export const FormEvent: FC<FormEventProps> = ({ onSubmitEvent }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        date: '',
        hour: '',
        description: '',
        location: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={({ name, description, date, hour, location }, actions) => {
        const event = {
          id: uuidV4(),
          name,
          date,
          hour,
          location,
          description,
        };
        onSubmitEvent(event);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className='form'>
          <fieldset className='form__fieldset'>
            <legend className='form__legend'>New Event</legend>

            <div className='form__input-wrapper'>
              <label className='form__label' htmlFor='name'>
                Name:
              </label>
              <Field className='form__input' name='name' id='name' />
              {errors.name && touched.name ? (
                <div className='form__error'>{errors.name}</div>
              ) : null}
            </div>

            <div className='form__input-wrapper'>
              <label className='form__label' htmlFor='date'>
                Date:
              </label>
              <Field
                className='form__input'
                name='date'
                type='date'
                id='date'
              />
              {errors.date && touched.date ? (
                <div className='form__error'>{errors.date}</div>
              ) : null}
            </div>

            <div className='form__input-wrapper'>
              <label className='form__label' htmlFor='hour'>
                Time:
              </label>
              <Field
                className='form__input'
                name='hour'
                type='time'
                id='hour'
              />
              {errors.hour && touched.hour ? (
                <div className='form__error'>{errors.hour}</div>
              ) : null}
            </div>
            <div className='form__input-wrapper'>
              <label className='form__label' htmlFor='description'>
                Description:
              </label>
              <Field
                className='form__input form__input--textarea'
                name='description'
                id='description'
                as='textarea'
                rows='4'
                maxLength={90}
              />
              {errors.description && touched.description ? (
                <div className='form__error'>{errors.description}</div>
              ) : null}
            </div>

            <div className='form__input-wrapper'>
              <label className='form__label' htmlFor='location'>
                Location:
              </label>
              <Field className='form__input' name='location' id='location' />
              {errors.location && touched.location ? (
                <div className='form__error'>{errors.location}</div>
              ) : null}
            </div>

            <button className='form__submit' type='submit'>
              Add Event
            </button>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
