import type { FormikConfig, FormikValues } from 'formik'



export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'>{
    label:string
}

const FormikStep = ({children, validationSchema}:FormikStepProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default FormikStep
