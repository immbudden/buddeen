import React from 'react';
import { render } from 'react-dom';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import classNames from "classnames";
import styled from 'styled-components';
import PropTypes from 'prop-types';

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


const App = props => {
  const {
      values,
      errors,
      touched,
      handleChange,
      isSubmitting 
    } = props;

  return (
      <Form
        key="rsvpForm"
        name="rsvpForm"
        method="POST"
        action={'#'}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >

            <FormLabel className="label">Full Name</FormLabel>
            {touched.fullname && errors.fullname && <p>{errors.fullname}</p>}
            <FormInput className="input" type="text" name="fullname" placeholder="Full Name" />


        <HoneyPot name="bot-field" type="pot-name" />

            <label className="label">Email Address</label>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <FormInput className="input" type="email" name="email" placeholder="Email" />

            <label className="label">Telephone Number</label>
            {touched.tel && errors.tel && <p>{errors.tel}</p>}
            <FormInput className="input" type="tel" name="tel" placeholder="Telephone Number" />


        <Divider />

        <div className="control">
            <FormLabel className="label">Will you be attending?</FormLabel>

            <InputContainer>
                {touched.attending && errors.attending && <p>{errors.attending}</p>}
                <RadioInput type="radio" name="attending" value="yes" checked={values.attending === 'yes'} onChange={handleChange} />
                <InputLabel>Yes</InputLabel>
            </InputContainer>
            <InputContainer>
                <RadioInput type="radio" name="attending" value="no" checked={values.attending === 'no'} onChange={handleChange} />
                <InputLabel>No</InputLabel>
            </InputContainer>
        </div>

        <Spacer />

        <FormLabel className="label">Do you have a plus one?</FormLabel>
        <InputWrapper>
            <FormInputSpaced name="plusName" type="text" placeholder="If yes, what is their full name?" className="input" />
        </InputWrapper> 

        <FormLabel className="label">I will be attending:</FormLabel>

        <InputWrapper>
             {touched.attendanceDetail && errors.attendanceDetail && <p>{errors.attendanceDetail}</p>}
            <InputContainer>
                <TickInput type="checkbox" name="rehersal" value={values.attendanceDetail} />
                <InputLabel>
                    Rehersal Dinner
                    {touched.attendanceDetail && errors.attendanceDetail && <p>{errors.attendanceDetail}</p>}
                </InputLabel>
            </InputContainer>
            <InputContainer>
                <TickInput type="checkbox" name="wedding" value={values.attendanceDetail} />
                <InputLabel>
                    Wedding Ceremony
                    {touched.attendanceDetail && errors.attendanceDetail && <p>{errors.attendanceDetail}</p>}
                </InputLabel>
            </InputContainer>
            <InputContainer>
                <TickInput type="checkbox" name="evening" value={values.attendanceDetail} />
                <InputLabel>
                    Evening Reception
                    {touched.attendanceDetail && errors.attendanceDetail && <p>{errors.attendanceDetail}</p>}
                </InputLabel>
            </InputContainer>

            {/* <InputContainer>
                <TickInput type="checkbox" name="Wedding-Ceremony" value="Wedding Ceremony" />
                <InputLabel>Wedding Ceremony</InputLabel>
            </InputContainer>
            <InputContainer>
                <TickInput type="checkbox" name="evening" value="Evening Reception" />
                <InputLabel>Evening Reception</InputLabel>
            </InputContainer> */}
        </InputWrapper>

        <InputWrapper>
            <FormLabel className="label">Will you need a space on the bus?</FormLabel>
            <InputContainer>
                <RadioInput type="radio" name="bus" value="yes" checked={values.bus === 'yes'} onChange={handleChange} />
                <InputLabel>Yes</InputLabel>
            </InputContainer>
            <InputContainer>
                <RadioInput type="radio" name="bus" value="no" checked={values.bus === 'no'} onChange={handleChange} />
                <InputLabel>No</InputLabel>
            </InputContainer>
        </InputWrapper>

        
        <FormLabel className="label">Dietry Requirements</FormLabel>
        {touched.dietry && errors.dietry && <p>{errors.dietry}</p>}
        <InputWrapper>
            <FormInputSpaced name="dietry" type="text" placeholder="If yes, please detail" className="input" />
        </InputWrapper> 

        <Button type="submit" disabled={isSubmitting}>Send</Button>
      </Form>
  )
}

const FormikApp = withFormik({
//   mapPropsToValues({ email, password, rehersal, editor, test }) {
//     return {
//       email: email || '',
//       password: password || '',
//       rehersal: rehersal || false,
//       editor: editor || 'atom',
//       test: test || ''
//     }
//   },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    fullname: Yup.string().required('Full Name is required!'),
    tel: Yup.string().required('Telephone Number is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'yomi@gmail.io') {
        setErrors({ email: 'That email is already taken' })
      } else {
        resetForm()
      }
      setSubmitting(true)
    }, 2000)
  }
})(App)

export default FormikApp;