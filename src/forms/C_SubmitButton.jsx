import React from 'react';
import { useFormikContext } from 'formik';

function C_SubmitButton({title="submit",style}) {
const {handleSubmit}=useFormikContext()

return (
    <button  style={style} onClick={handleSubmit} type="submit">{title}</button>
 );
}
export default C_SubmitButton;