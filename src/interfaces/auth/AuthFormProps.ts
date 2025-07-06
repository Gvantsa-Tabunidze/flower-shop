import type { IAuth } from "./AuthUserInterface";

export interface AuthFormProps {
    type_of_auth: string,
    onSubmit: (formData:IAuth)=> void
}