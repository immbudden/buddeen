import React from "react";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import classNames from "classnames";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled(Form) `
    flex: 1 1 100%;
    margin-bottom: 5rem;
`

const Button = styled.button `
    background: #64D2C3;
    color: #FFF;
    font-size: 1.5rem;
    padding: 10px 15px 5px; // Typefix
    border: none;
    border-radius: 0.4rem;
    margin: 0 auto;
    min-width: 45vw;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HoneyPot = styled('input') `
    display: none;
`

const Divider = styled.div `
    flex: 1 1 100%;
    width: 50vw;
    margin: 5rem auto;
    border 1px solid #FFF;
    box-shadow: 0px 3px 6px 0px rgba(20,65,100,0.1);
`

const FormInput = styled(Field) `
    font-size: 1.5rem;
    font-weight: 100;
    color: #222;
    width: 100%;
    padding: 1rem;
    margin-bottom: 2.5rem;
    border: 2px solid #EEE;
    padding-bottom: 0.5rem; //typefix

    &:last-of-type {
        margin-bottom: 0;
    }
`

const RadioInput = styled.input `
    height: 2.25rem;
    width: 2.25rem;
    background-color: #FFF;
    margin: 1rem;
    margin-left: 0;
    &:
`

const InputLabel = styled.span `
    font-size: 1.5rem;
    justify-content: center;
    margin-top: 0.5rem;
    color: #144164;
    font-weight: 100;
    margin-left: 1rem;
`

const InputContainer = styled.div `
    flex: 1 1 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
`

const Spacer = styled.div `
    flex: 1 1 100%;
    width: 50vw;
    margin: 3rem auto;
    border 0px solid #FFF;
`

const InputWrapper = styled.div `
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const FormInputSpaced = styled('input') `
    font-size: 1.5rem;
    font-weight: 100;
    color: #222;
    width: 100%;
    padding: 1rem;
    margin-bottom: 0rem;
    margin-top: 1rem;
    border: 2px solid #EEE;
    padding-bottom: 0.5rem; //typefix

    &:last-of-type {
        margin-bottom: 0;
    }
`

const FieldGroup = styled.fieldset `
    border: 0;
    margin-bottom: 0;
`

const TickInput = styled.input `
    height: 2.25rem;
    width: 2.25rem;
    background-color: #FFF;
    margin: 1rem;
    margin-left: 0;
    &:
`

const FormLabel = styled('label') `
    font-size: 1.5rem;
    font-weight: 500;
    color: #222;
    flex: 1 1 100%;
    margin-bottom: 0;
    // text-transform: uppercase;
    color: #144164;
`

const Feedback = styled.p `
    font-size: 1.5rem;
    justify-content: center;
    margin-top: 0.5rem;
    color: #E62645;
    font-weight: 400;
    margin-top: 1rem;
`

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <Feedback>{error}</Feedback> : null;

// Checkbox input
const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <TickInput
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
      />
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {touched[name] && <InputFeedback error={errors[name]} />}
    </div>
  );
};

// Checkbox group
class AttendanceDetailGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...this.props.value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    this.props.onChange(this.props.id, valueArray);
  };

  handleBlur = () => {
    // take care of touched
    this.props.onBlur(this.props.id, true);
  };

  render() {
    const { value, error, touched, label, className, children } = this.props;

    const classes = classNames(
      "input-field",
      {
        "is-success": value || (!error && touched), // handle prefilled or user-filled
        "is-error": !!error && touched
      },
      className
    );

    return (
      <div>
        <FormLabel className="label">{label}</FormLabel>
        <FieldGroup>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: this.handleChange,
                onBlur: this.handleBlur
              }
            });
          })}
          {touched && <InputFeedback error={error} />}
        </FieldGroup>
      </div>
    );
  }
}


// Radio input

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <RadioInput
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
        {...props}
      />
      <InputLabel htmlFor={id}>{label}</InputLabel>
    </div>
  );
};


// Radio group

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = classNames(
    "input-field",
    {
      "is-success": value || (!error && touched), // handle prefilled or user-filled
      "is-error": !!error && touched
    },
    className
  );

  return (

    <div>
      <FormLabel className="label">{label}</FormLabel>
      <FieldGroup>
        {children}
        {touched && <InputFeedback error={error} />}
      </FieldGroup>
    </div>


    // <div className={classes}>
    //   <fieldset>
    //     <legend>{label}</legend>
    //     {children}
    //     {touched && <InputFeedback error={error} />}
    //   </fieldset>
    // </div>
  );
};

const RSVPForm = () => (
  <div className="app">

    <Formik
      initialValues={{
        attendanceGroup: "",
        fullname: "",
        busGroup: "",
        // plusOneGroup: "",
        // dietGroup: "",
        // diet: "",
        attendanceDetailGroup: [],

      }}
      validationSchema={Yup.object().shape({
        attendanceGroup: Yup.string().required("Are you attending the wedding?"),
        attendanceDetailGroup: Yup.array().required("What are you coming to?"),
        busGroup: Yup.string().required("Do you need a space?"),
      })}
      // onSubmit={(values, actions) => {
      //   setTimeout(() => {
      //     console.log(JSON.stringify(values, null, 2));
      //     actions.setSubmitting(false);
      //   }, 500);
      // }}
      render={({
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        values,
        errors,
        touched,
        isSubmitting
      }) => (
        <StyledForm >

          <div>
            <FormLabel className="label">Full Name</FormLabel>
            {touched.fullname && errors.fullname && <p>{errors.fullname}</p>}
            <FormInput className="input" type="text" name="fullname" placeholder="Full Name" />

            <HoneyPot name="bot-field" type="pot-name" />

            <FormLabel className="label">Email Address</FormLabel>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <FormInput className="input" type="email" name="email" placeholder="Email" />

            <FormLabel className="label">Telephone Number</FormLabel>
            {touched.tel && errors.tel && <p>{errors.tel}</p>}
            <FormInput className="input" type="tel" name="tel" placeholder="Telephone Number" />
          </div>

          <Divider />

          <RadioButtonGroup
              id="attendanceGroup"
              label="Will you be in attendance?"
              value={values.attendanceGroup}
              error={errors.attendanceGroup}
              touched={touched.attendanceGroup}
          >
              <Field
              component={RadioButton}
              name="attendanceGroup"
              id="attendanceYes"
              label="Yes"
              />
              <Field
              component={RadioButton}
              name="attendanceGroup"
              id="attendanceNo"
              label="No"
              />
          </RadioButtonGroup>

          <Spacer />
          
          <AttendanceDetailGroup
              id="attendanceDetailGroup"
              label="I will be attending..."
              value={values.attendanceDetailGroup}
              error={errors.attendanceDetailGroup}
              touched={touched.attendanceDetailGroup}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
          >
              <Field
              component={Checkbox}
              name="attendanceDetailGroup"
              id="attendanceRehersal"
              label="Rehersal Dinner"
              />
              <Field
              component={Checkbox}
              name="attendanceDetailGroup"
              id="attendanceWedding"
              label="Wedding Ceremony"
              />
              <Field
              component={Checkbox}
              name="attendanceDetailGroup"
              id="attendanceEvening"
              label="Evening Reception"
              />
              <Field
              component={Checkbox}
              name="attendanceDetailGroup"
              id="attendanceNone"
              label="None of the above"
              />
          </AttendanceDetailGroup>

          <Spacer />

          <RadioButtonGroup
              id="busGroup"
              label="Do you need a space on the bus?"
              value={values.attendanceGroup}
              error={errors.attendanceGroup}
              touched={touched.attendanceGroup}
          >
              <Field
              component={RadioButton}
              name="busGroup"
              id="busYes"
              label="Yes"
              />
              <Field
              component={RadioButton}
              name="busGroup"
              id="busNo"
              label="No"
              />
          </RadioButtonGroup>

          <Spacer />
          
          <FormLabel className="label">If you have a plus one, what is their name?</FormLabel>
          {/* {touched.plusonefullname && errors.plusonefullname && <p>{errors.plusonefullname}</p>} */}
          <FormInputSpaced className="input" type="text" name="plusonefullname" placeholder="Full Name" />

          <Spacer />

          <FormLabel className="label">Do you have any dietry requirements?</FormLabel>
          {/* {touched.diet && errors.diet && <p>{errors.diet}</p>} */}
          <FormInput className="input" type="text" name="diet" placeholder="Detail any dietry requirements" />

          <Button type="submit" disabled={isSubmitting}>
              Send
          </Button>
        </StyledForm>
      )}
    />
  </div>
);

export default RSVPForm;
