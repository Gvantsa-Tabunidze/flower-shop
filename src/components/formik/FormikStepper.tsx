import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik, type FormikConfig,  type FormikValues } from "formik";
import React, { useState } from "react";
import type { FormikStepProps } from "./FormikStep";



export const FormikStepper = ({children, ...props}: FormikConfig<FormikValues>)=>{
const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[]
const [step,setStep] = useState(0)
const currentChild = childrenArray[step] as React.ReactElement<FormikStepProps>
const [completed,setCompleted] =  useState(false)
// console.log('children', currentChild)

function isLastStep(){
    return step === childrenArray.length-1
}

return (
  <Formik {...props} 
  validationSchema={currentChild.props.validationSchema}
  onSubmit={async(values, helpers)=>{
    if(isLastStep()){
        await props.onSubmit(values, helpers)
        setCompleted(true)
        helpers.resetForm()
    } else {
        setStep(s=>s+1)
        
    }
  }}>
    {({isSubmitting})=>(
       <Form autoComplete="off">
         <Stepper activeStep={step} alternativeLabel>
        {childrenArray.map((child, index) => (
          <Step key={child.props.label} completed={step > index || completed}>
            <StepLabel>{child.props.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

        {currentChild}
        {step >0 ? <Button onClick={()=> setStep(s=>s-1)}>Back</Button> : null}
        <Button disabled={isSubmitting} type='submit'>{isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}</Button>
      </Form>
    )}

    </Formik>
      
)
}