import React from "react";
import { render } from "react-dom";
import * as Yup from 'yup';
import classNames from "classnames";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NetlifyForm from 'react-netlify-form'

const StyledForm = styled(NetlifyForm) `
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
    width: 45vw;
    max-width: 20rem;
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

const RadioGroup = styled.fieldset `
    border: 0;
`

const CheckboxGroup = styled.fieldset `
    border: 0;
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

const FormContainer = styled.div `
  margin-bottom: 2.5rem;
`


const RSVPForm = (props) => (
    <StyledForm 
        key="rsvpForm"
        name="rsvpForm"
        method="POST"
        action={'#'}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >

      {({ loading, error, success }) => (
          <FormContainer>
            {loading &&
              <div>Loading...</div>
            }
            {error &&
              <div>Your RSVP was not sent. Please try again later.</div>
            }
            {success &&
              <div>Thank you for sending your RSVP</div>
            }
            {!loading && !success &&
              <div>
                <input type="hidden" name="form-name" value="rsvpForm" />

                <div>
                    <FormInput name="name" type="name" placeholder="Full Name" required/>

                    <HoneyPot name="bot-field" type="pot-name" />

                    <FormInput name="email" type="email" placeholder="Email" required/>

                    <FormInput name="tel" type="tel" placeholder="Telephone number" required/>
                </div>

                <Divider />

                <FormLabel htmlFor="attendance">Will you be attending the wedding?</FormLabel>

                <InputWrapper>
                  <RadioGroup>
                    <InputContainer>
                        <RadioInput type="radio" name="attending" value="yes" required />
                        <InputLabel>Yes</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <RadioInput type="radio" name="attending" value="no" />
                        <InputLabel>No</InputLabel>
                    </InputContainer>
                  </RadioGroup>
                </InputWrapper>

                <Spacer />

                <FormLabel htmlFor="attendancedetail">I'll be attending:</FormLabel>

                <InputWrapper>
                  <CheckboxGroup>
                    <InputContainer>
                        <TickInput type="checkbox" name="WeddingCeremony" value="Yes"/>
                        <InputLabel>Wedding Ceremony</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <TickInput type="checkbox" name="EveningReception" value="Yes" />
                        <InputLabel>Evening Reception</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <TickInput type="checkbox" name="Breakfast" value="Yes" />
                        <InputLabel>Breakfast (5<sup>th</sup> July @ Kilmore House)</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <TickInput type="checkbox" name="None" value="None" />
                        <InputLabel>None</InputLabel>
                    </InputContainer>
                  </CheckboxGroup>
                </InputWrapper>

                <Spacer />

                <FormLabel htmlFor="attendancedetail">Do you need a space on the bus?</FormLabel>

                <InputWrapper>
                  <RadioGroup>
                    <InputContainer>
                        <RadioInput type="radio" name="bus" value="yes" required/>
                        <InputLabel>Yes</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <RadioInput type="radio" name="bus" value="no" />
                        <InputLabel>No</InputLabel>
                    </InputContainer>
                  </RadioGroup>
                </InputWrapper>

                <Spacer />

                <FormLabel htmlFor="plusOneName">Are you bringing a plus one?</FormLabel>

                <FormInputSpaced name="plusOneName" type="text" placeholder="If yes, what is their full name?" />

                <Spacer />

                <FormLabel htmlFor="dietry">Any dietry requirements we should know about?</FormLabel>

                <FormInput name="dietry" type="text" placeholder="If yes, please detail" />

                <Button type="submit">Send</Button>
            </div>
            }
          </FormContainer>
        )}
        
    </StyledForm>
  ) 

export default RSVPForm;
