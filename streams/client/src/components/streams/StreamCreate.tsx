import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form'; //Fiedl is a react component and reduxForm is a function

const StreamCreate = (props: any) => {
    // const []=useState()

    const renderInput = (formProps: any) => {
        return <input {...formProps.input}/>;
    };

    return (
        <form>
            {/* name is always required, representing the name of the property that this field is going to manage  */}
            {/* we have to tell Field what to render with the 'component' prop  */}
            <Field name="title" component={renderInput} />
            <Field name="description" component={renderInput} />
        </form>
    );
};

export default reduxForm({
    form: 'streamCreate', //name of the form, representing the purpose of the form
})(StreamCreate);
