import React from 'react';
import Input from '../src/comps/Form/Input';
import SigninForm from '../src/comps/Form/SignIn '; 
import SignupForm from '../src/comps/Form/SignUp';
import PaymentForm from '../src/comps/Form/Payment';

export default {
    title: 'Form', 
    component: SigninForm
}; 

export const BasicInput = () => <Input />;
export const ShortInput = () => <Input changeWidth="false" ph="MM/YY" label="Expiry date"/>;
export const BasicSigninForm = () => <SigninForm />;
export const BasicSignupForm = () => <SignupForm />;
export const BasicPaymentForm = () => <PaymentForm />;

