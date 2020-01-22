import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"; //Fiedl is a react component and reduxForm is a function
import cx from "classnames";
import { createStream } from "../../actions";
import { IFormValues } from "../../interface";

class StreamCreate extends React.Component<any> {
  renderError = (meta: any) => {
    const { touched, error } = meta;
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = (fieldProps: any) => {
    const { input, label, meta } = fieldProps;
    return (
      <div className={cx(`field`, { error: meta.touched && meta.error })}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues: IFormValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        {/* name is always required, representing the name of the property that this field is going to manage  */}
        {/* we have to tell Field what to render with the 'component' prop  */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues: any) => {
  const errors: any = {};
  const keys = ["title", "description"];

  keys.forEach(key => {
    if (!formValues[key]) {
      errors[key] = `You must enter a ${key}.`;
    }
  });

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate", //name of the form, representing the purpose of the form
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
