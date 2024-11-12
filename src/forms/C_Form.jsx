import React from 'react';
import { Formik } from 'formik';
// import Form from 'react-bootstrap/Form';

function C_Form({initialValues,onSubmit,validationSchema,children}) {
return (
<Formik
initialValues={initialValues}
onSubmit={onSubmit}
validationSchema={validationSchema}
>
{() => 
(<>
<form noValidate 
// onSubmit={onSubmit}
>
{children}
</form>
</>)
}
</Formik>
 );
}
export default C_Form;