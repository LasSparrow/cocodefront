import React from 'react';
import SigninForm from '../comps/Input'; 
import SessionBox from '../comps/Session'; 

export default {
    title: 'Form', 
    component: SigninForm
}; 

export const BasicSigninForm = () => <SigninForm />;
export const BasicSessionBox = () => <SessionBox />;