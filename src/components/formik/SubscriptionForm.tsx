import { CheckboxWithLabel, TextField } from 'formik-mui'
import {Field, Form, Formik} from 'formik'
import * as yup from 'yup'


const validationSchema=yup.object({
  first_name: yup
    .string()
    .typeError('Enter your first name')
    .required('First name is required'),
  last_name: yup
    .string()
    .typeError('Enter your first name')
    .required('Last name is required'),
  legal_entity: yup
    .boolean(),
  average_income: yup
    .number()
    .typeError('Enter a valid number')
    .when('legal_entity', {
      is: true,
      then: (schema) =>
        schema
          .required('Average income is required')
          .min(100000, 'Average income must be at least 100,000'),
      otherwise: (schema) =>
       schema.notRequired()
    })

})


const SubscriptionForm = () => {
  return (
    <div>
      <Formik 
      validationSchema={validationSchema}
      initialValues={{
        first_name:'',
        last_name:'',
        legal_entity: false,
        business_description:'',
        average_income:0
      }} onSubmit={()=>{}}>
        <Form autoComplete='off'>
            <Field name='first_name' type='text' label='First name' component={TextField}/>
            <Field name='last_name' type='text' label='Last name' component={TextField} />
            <Field name='legal_entity' type='checkbox'  component={CheckboxWithLabel} Label={{label:'Legal entity'}}/>
            <Field name='business_description' type='text' component={TextField} label='Business description' />
            <Field name='average_income' type='number' component={TextField} label='Average income' />
        </Form>
      </Formik>
    </div>
  )
}

export default SubscriptionForm
