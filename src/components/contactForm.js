import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';

// const styles = theme => ({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       marginLeft: theme.spacing.unit,
//       marginRight: theme.spacing.unit,
//     },
//     dense: {
//       marginTop: 16,
//     },
//     menu: {
//       width: 200,
//     },
//   });

//   class OutlinedTextFields extends React.Component {
//     state = {
//       name: 'Cat in the Hat',
//       age: '',
//       multiline: 'Controlled',
//       currency: 'EUR',
//     };
  
//     handleChange = name => event => {
//       this.setState({
//         [name]: event.target.value,
//       });
//     };
  
//     render() {
//       const { classes } = this.props;
  
//       return (
//         <form className={classes.container} noValidate autoComplete="on">

//         <TextField
//             id="outlined-required"
//             label="Name"
//             className={classes.textField}
//             value={this.state.name}
//             onChange={this.handleChange('name')}
//             defaultValue="Hello World"
//             margin="normal"
//             variant="outlined"
//         />

//         <TextField
//           required
//           id="outlined-required"
//           label="Required"
//           defaultValue="Hello World"
//           className={classes.textField}
//           margin="normal"
//           variant="outlined"
//         />

  
//         </form>
//       );
//     }
//   }
  
//   OutlinedTextFields.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

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

const FormLabel = styled('label') `
    font-size: 1.5rem;
    font-weight: 500;
    color: #222;
    flex: 1 1 100%;
    margin-bottom: 0;
    // text-transform: uppercase;
    color: #144164;
`

const FormInput = styled('input') `
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

const FormTextArea = styled('textarea') `
    font-size: 1.5rem;
    font-weight: 100;
    color: #222;
    width: 100%;
    height: 10rem;
    padding: 1rem;
    border: 2px solid #EEE;
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

const InputContainer = styled.div `
    flex: 1 1 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
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

const TickInput = styled.input `
    height: 2.25rem;
    width: 2.25rem;
    background-color: #FFF;
    margin: 1rem;
    margin-left: 0;
    &:
`


// const ContactForm = (props) => (
//     <Form 
//         key="contact-form"
//         name="contact-form"
//         method="POST"
//         action={'#'}
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//     >
//         <input type="hidden" name="form-name" value="contact-form" />

//         <div>
//             <FormInput name="name" type="name" placeholder="Full Name" />

//             <HoneyPot name="bot-field" type="pot-name" />

//             <FormInput name="email" type="email" placeholder="Email" />

//             <FormInput name="tel" type="tel" placeholder="Telephone number" />
//         </div>

//         <Divider />
        
//         <FormLabel htmlFor="attendance">Will you be attending the wedding?</FormLabel>
        
//         <InputWrapper>
//             <InputContainer>
//                 <RadioInput type="radio" name="attending" value="yes" />
//                 <InputLabel>Yes</InputLabel>
//             </InputContainer>
//             <InputContainer>
//                 <RadioInput type="radio" name="attending" value="no" />
//                 <InputLabel>No</InputLabel>
//             </InputContainer>
//         </InputWrapper>

//         <Spacer />

//         <FormLabel htmlFor="attendancedetail">I'll be attending:</FormLabel>

//         <InputWrapper>
//             <InputContainer>
//                 <TickInput type="checkbox" name="Rehersal-Dinner" value="Rehersal Dinner" />
//                 <InputLabel>Rehersal Dinner</InputLabel>
//             </InputContainer>
//             <InputContainer>
//                 <TickInput type="checkbox" name="Wedding-Ceremony" value="Wedding Ceremony" />
//                 <InputLabel>Wedding Ceremony</InputLabel>
//             </InputContainer>
//             <InputContainer>
//                 <TickInput type="checkbox" name="evening" value="Evening Reception" />
//                 <InputLabel>Evening Reception</InputLabel>
//             </InputContainer>
//         </InputWrapper>

//         <Spacer />

//         <FormLabel htmlFor="attendancedetail">Do you need a space on the bus?</FormLabel>

//         <InputWrapper>
//             <InputContainer>
//                 <RadioInput type="radio" name="bus" value="yes" />
//                 <InputLabel>Yes</InputLabel>
//             </InputContainer>
//             <InputContainer>
//                 <RadioInput type="radio" name="bus" value="no" />
//                 <InputLabel>No</InputLabel>
//             </InputContainer>
//         </InputWrapper>

//         <Spacer />

//         <FormLabel htmlFor="plusone">Are you bringing a plus one?</FormLabel>

//         <InputWrapper>
//             <InputContainer>
//                 <RadioInput type="radio" name="plusone" value="yes" />
//                 <InputLabel>Yes</InputLabel>
//             </InputContainer>
//             <InputContainer>
//                 <RadioInput type="radio" name="plusone" value="no" />
//                 <InputLabel>No</InputLabel>
//             </InputContainer>
//         </InputWrapper>

//         <FormInputSpaced name="Plus-One-Name" type="text" placeholder="If yes, what is their full name?" />

//         <Divider />

//         <FormLabel htmlFor="dietry">Any dietry requirements we should know about?</FormLabel>

//         <FormInput name="dietry" type="text" placeholder="If yes, please detail" />

//         <Button type="submit">Send</Button>
//     </Form>
// )

const ContactForm = (props) => (
    <Formik
        // Sets up our default values
        // initialValues={{ 
        //     fullname: "Full Name", 
        //     email: "Email Address",
        //     tel: "Telephone Number",
        //     plusOneName: "If yes, what is their full name?",
        //     dietry: "Any dietry requirements we should know about?"
        // }}

        // Validates our data
        validate={values => {
            const errors = {};

            if (!values.name) errors.name = "You must enter your name";

            if (!values.email) errors.email = "Required";

            if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
            errors.email = "You must supply a valid email address";
            }

            if (
            !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/m.test(values.tel)
            ) {
            errors.tel = "You must supply a valid telephone number";
            }

            if (!values.message) errors.message = "You must enter a message";

            if (!values.attending) errors.attending = "Please tell us if your are coming to the wedding";

            if (!values.attendingdetail) errors.attendingdetail = "Please tell us what you are coming to";

            if (!values.bus) errors.bus = "Please tell us if you need a space on the bus";

            if (!values.plusOne) errors.bus = "Please tell us if you are bringing a plus one";

            return errors;
        }}

        // Handles our submission
        // onSubmit={(values, { setSubmitting }) => {
        //     // This is where you could wire up axios or superagent
        //     console.log("Submitted Values:", values);
        //     // Simulates the delay of a real request
        //     setTimeout(() => setSubmitting(false), 3 * 1000);
        // }}
        >
        {props => (
            <StyledForm 
                key="contact-form"
                name="contact-form"
                method="POST"
                action={'#'}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
            <FormLabel htmlFor="name">Name</FormLabel>

                <FormInput
                name="name"
                type="name"
                placeholder="Enter your full name"
                value={props.values.name}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                style={{
                    borderColor:
                    props.errors.name && props.touched.name && "red"
                }}
                />
                {props.errors.name && props.touched.name && (
                <div style={{ color: "red" }}>{props.errors.name}</div>
                )}

            <FormInput
                name="bot-field"
                type="hidden"
            />
            <FormLabel htmlFor="email">Email</FormLabel>

                <FormInput
                name="email"
                type="email"
                placeholder="Email Address"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                style={{
                    borderColor:
                    props.errors.email && props.touched.email && "red"
                }}
                />
                {props.errors.email && props.touched.email && (
                <div style={{ color: "red" }}>{props.errors.email}</div>
                )}

            <FormLabel htmlFor="tel">Telephone Number</FormLabel>

                <FormInput
                    name="tel"
                    type="tel"
                    placeholder="Telephone Number"
                    value={props.values.tel}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    style={{
                        borderColor:
                        props.errors.tel && props.touched.tel && "red"
                    }}
                />
                {props.errors.tel && props.touched.tel && (
                    <div style={{ color: "red" }}>{props.errors.tel}</div>
                )}

                <Divider />

                <FormLabel htmlFor="attendance">Will you be attending the wedding?</FormLabel>

                <RadioInput
                    name="attendance"
                    type="radio"
                    value={props.values.attendance}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    style={{
                        borderColor:
                        props.errors.attendance && props.touched.attendance && "red"
                    }}
                />
                <InputLabel>Yes</InputLabel>

                <RadioInput
                    name="attendance"
                    type="radio"
                    value={props.values.attendance}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    style={{
                        borderColor:
                        props.errors.attendance && props.touched.attendance && "red"
                    }}
                />
                <InputLabel>No</InputLabel>

                {props.errors.attendance && props.touched.attendance && (
                <div style={{ color: "red" }}>{props.errors.attendance}</div>
                )}

                {/* <FormLabel htmlFor="attendance">Will you be attending the wedding?</FormLabel>
                        
                    <InputWrapper>
                        <InputContainer>
                            <RadioInput type="radio" name="attending" value="yes" />
                            <InputLabel>Yes</InputLabel>
                        </InputContainer>
                        <InputContainer>
                            <RadioInput type="radio" name="attending" value="no" />
                            <InputLabel>No</InputLabel>
                        </InputContainer>
                    </InputWrapper> */}

                    <Spacer />

                    <TickInput
                        name="attendanceDetail"
                        type="checkbox"
                        value="Rehersal Dinner"
                        value={props.values.attendanceDetail}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        style={{
                            borderColor:
                            props.errors.attendanceDetail && props.touched.attendanceDetail && "red"
                        }}
                    />
                    <InputLabel>Rehersal Dinner</InputLabel>

                    <TickInput
                        name="attendanceDetail"
                        type="checkbox"
                        value="Wedding Ceremony"
                        value={props.values.attendanceDetail}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        style={{
                            borderColor:
                            props.errors.attendanceDetail && props.touched.attendanceDetail && "red"
                        }}
                    />
                    <InputLabel>Wedding Ceremony</InputLabel>

                    <TickInput
                        name="attendanceDetail"
                        type="checkbox"
                        value="Evening Reception"
                        value={props.values.attendanceDetail}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        style={{
                            borderColor:
                            props.errors.attendanceDetail && props.touched.attendanceDetail && "red"
                        }}
                    />
                    <InputLabel>Evening Reception</InputLabel>

                    {props.errors.attendanceDetail && props.touched.attendanceDetail && (
                    <div style={{ color: "red" }}>{props.errors.attendanceDetail}</div>
                    )}

                    {/* <FormLabel htmlFor="attendancedetail">I'll be attending:</FormLabel>

                    <InputWrapper>
                        <InputContainer>
                            <TickInput type="checkbox" name="Rehersal-Dinner" value="Rehersal Dinner" />
                            <InputLabel>Rehersal Dinner</InputLabel>
                        </InputContainer>
                        <InputContainer>
                            <TickInput type="checkbox" name="Wedding-Ceremony" value="Wedding Ceremony" />
                            <InputLabel>Wedding Ceremony</InputLabel>
                        </InputContainer>
                        <InputContainer>
                            <TickInput type="checkbox" name="evening" value="Evening Reception" />
                            <InputLabel>Evening Reception</InputLabel>
                        </InputContainer>
                    </InputWrapper> */}

                    <Spacer />

                    <FormLabel htmlFor="attendance">Do you need a space on the bus?</FormLabel>

                    <RadioInput
                        name="bus"
                        type="radio"
                        value={props.values.bus}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        style={{
                            borderColor:
                            props.errors.bus && props.touched.bus && "red"
                        }}
                    />
                    <InputLabel>Yes</InputLabel>

                    <RadioInput
                        name="bus"
                        type="radio"
                        value={props.values.bus}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        style={{
                            borderColor:
                            props.errors.bus && props.touched.bus && "red"
                        }}
                    />
                    <InputLabel>No</InputLabel>

                    {props.errors.bus && props.touched.bus && (
                    <div style={{ color: "red" }}>{props.errors.bus}</div>
                    )}

                    {/* <FormLabel htmlFor="attendancedetail">Do you need a space on the bus?</FormLabel>

                    <InputWrapper>
                        <InputContainer>
                            <RadioInput type="radio" name="bus" value="yes" />
                            <InputLabel>Yes</InputLabel>
                        </InputContainer>
                        <InputContainer>
                            <RadioInput type="radio" name="bus" value="no" />
                            <InputLabel>No</InputLabel>
                        </InputContainer>
                    </InputWrapper> */}

                    <Spacer />

                    <FormLabel htmlFor="plusOne">Are you bringing your plus one?</FormLabel>

                    <RadioInput
                        name="bus"
                        type="radio"
                        value={props.values.plusOne}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        style={{
                            borderColor:
                            props.errors.bus && props.touched.bus && "red"
                        }}
                    />
                    <InputLabel>Yes</InputLabel>

                    <RadioInput
                        name="plusOne"
                        type="radio"
                        value={props.values.plusOne}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        style={{
                            borderColor:
                            props.errors.plusOne && props.touched.plusOne && "red"
                        }}
                    />
                    <InputLabel>No</InputLabel>

                    {props.errors.plusOne && props.touched.plusOne && (
                    <div style={{ color: "red" }}>{props.errors.plusOne}</div>
                    )}

                    <FormLabel htmlFor="plusOneName">Name of Plus One</FormLabel>

                    <FormInput
                        name="plusOneName"
                        type="text"
                        placeholder="Full Name"
                        value={props.values.plusOneName}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />

                    {/* <FormLabel htmlFor="plusone">Are you bringing a plus one?</FormLabel>

                    <InputWrapper>
                        <InputContainer>
                            <RadioInput type="radio" name="plusone" value="yes" />
                            <InputLabel>Yes</InputLabel>
                        </InputContainer>
                        <InputContainer>
                            <RadioInput type="radio" name="plusone" value="no" />
                            <InputLabel>No</InputLabel>
                        </InputContainer>
                    </InputWrapper>

                    <FormInputSpaced name="Plus-One-Name" type="text" placeholder="If yes, what is their full name?" /> */}

                    <Divider />

                    <FormLabel htmlFor="dietry">Any dietry requirements?</FormLabel>

                    <FormInput
                        name="dietry"
                        type="text"
                        placeholder="If yes, please detail"
                        value={props.values.dietry}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                    {props.errors.dietry && props.touched.dietry && (
                    <div style={{ color: "red" }}>{props.errors.dietry}</div>
                    )}

                    {/* <FormLabel htmlFor="dietry">Any dietry requirements we should know about?</FormLabel>

                    <FormInput name="dietry" type="text" placeholder="If yes, please detail" /> */}

                    <Button type="submit">Send</Button>
            
            {/* <LightTealButton
                type="submit"
                value="Submit"
                disabled={props.isSubmitting}
            >
            Send
            </LightTealButton> */}
            </StyledForm>
            )}
    </Formik> 
)
  
export default ContactForm;