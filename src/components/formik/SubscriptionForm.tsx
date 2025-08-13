import { CheckboxWithLabel, TextField } from 'formik-mui'
import {Field} from 'formik'
import * as yup from 'yup'
import { FormikStepper } from './FormikStepper'
import FormikStep from './FormikStep'
import { Card } from '@mui/material'



const step1Schema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  legal_entity: yup.boolean(),
});

const step2Schema = yup.object({
  average_income: yup.number()
    .when('legal_entity', {
      is: true,
      then: (schema) => schema.required('Average income is required').min(100000),
      otherwise: (schema) => schema.notRequired()
    }),
});

const step3Schema = yup.object({
  business_description: yup.string().required('Business description is required'),
});

//timeout function forloading submission
const sleep = (timer:number)=> new Promise((accepted)=>setTimeout(accepted, timer))

const SubscriptionForm = () => {
  return (
    <div>
      <FormikStepper 
      initialValues={{
        first_name:'',
        last_name:'',
        legal_entity: false,
        business_description:'',
        average_income:0
      }} onSubmit={async(values)=>{
        await sleep(3000)
        console.log('values', values)
      }}>
        
          
          <FormikStep label='Personal data' validationSchema={step1Schema} >
             <Card sx={{padding:'24px', border:'1px solid black'}}> 
              <Field fullWidth name='first_name' type='text' label='First name' component={TextField}/>
              <Field fullWidth name='last_name' type='text' label='Last name' component={TextField} />
              <Field  name='legal_entity' type='checkbox'  component={CheckboxWithLabel} Label={{label:'Legal entity'}}/>
             </Card> 
          </FormikStep>
       

         
          <FormikStep label='Business data' validationSchema={step2Schema}> 
            <Card sx={{padding:'24px', border:'1px solid black'}}> 
               <Field fullWidth name='average_income' type='number' component={TextField} label='Average income' />
            </Card> 
          </FormikStep>
          

         
          <FormikStep label='More info' validationSchema={step3Schema}>
            <Card sx={{padding:'24px', border:'1px solid black'}}> 
              <Field fullWidth name='business_description' type='text' component={TextField} label='Business description' />
            </Card> 
          </FormikStep>
          
         
            
        
      </FormikStepper>
    </div>
  )
}

export default SubscriptionForm


