import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const Form = styled('form') `
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
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    border: 2px solid #EEE;

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


const ContactForm = (props) => (
    <Form 
        key="contact-form"
        name="contact-form"
        method="POST"
        action={'#'}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
        <input type="hidden" name="form-name" value="contact-form" />

        <div>
            <FormInput name="name" type="name" placeholder="Full Name" />

            <HoneyPot name="bot-field" type="pot-name" />

            <FormInput name="email" type="email" placeholder="Email" />

            <FormInput name="tel" type="tel" placeholder="Telephone number" />
        </div>

        <Divider />
        
        <FormLabel htmlFor="attendance">Will you be attending the wedding?</FormLabel>
        
        <InputWrapper>
            <InputContainer>
                <RadioInput type="radio" name="attending" value="yes" />
                <InputLabel>Yes</InputLabel>
            </InputContainer>
            <InputContainer>
                <RadioInput type="radio" name="attending" value="no" />
                <InputLabel>No</InputLabel>
            </InputContainer>
        </InputWrapper>

        <Spacer />

        <FormLabel htmlFor="attendancedetail">I'll be attending:</FormLabel>

        <InputWrapper>
            <InputContainer>
                <TickInput type="checkbox" name="rehersaldinner" value="Rehersal Dinner" />
                <InputLabel>Rehersal Dinner</InputLabel>
            </InputContainer>
            <InputContainer>
                <TickInput type="checkbox" name="weddingceremony" value="Wedding Ceremony" />
                <InputLabel>Wedding Ceremony</InputLabel>
            </InputContainer>
            <InputContainer>
                <TickInput type="checkbox" name="evening" value="Evening Reception" />
                <InputLabel>Evening Reception</InputLabel>
            </InputContainer>
        </InputWrapper>

        <Spacer />

        <FormLabel htmlFor="attendancedetail">Do you need a space on the bus?</FormLabel>

        <InputWrapper>
            <InputContainer>
                <RadioInput type="radio" name="bus" value="yes" />
                <InputLabel>Yes</InputLabel>
            </InputContainer>
            <InputContainer>
                <RadioInput type="radio" name="bus" value="no" />
                <InputLabel>No</InputLabel>
            </InputContainer>
        </InputWrapper>

        <Spacer />

        <FormLabel htmlFor="attendancedetail">Do you have any dietry requirements?</FormLabel>

        <FormInputSpaced name="dietry" type="dietry" placeholder="If yes, please detail" />

        <Button type="submit">Send</Button>
    </Form>
)
  
export default ContactForm;