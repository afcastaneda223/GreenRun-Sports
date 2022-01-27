/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import {
  Cardcontent, Cardwrap, Form, Fromgroup, FormControl, FormLabel, FormButton,
} from './styles/styles.style';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert('Password do not match');
    }

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      alert('Account created');
    } catch {
      alert('Failed to create an account');
    }
    setLoading(false);
    return true;
  }

  return (
    <Cardwrap>
      <Cardcontent>
        <h1>Welcome</h1>
        <Form onSubmit={handleSubmit}>
          <Fromgroup id="email">
            <FormLabel for="email">User</FormLabel>
            <FormControl type="email" ref={emailRef} required />
          </Fromgroup>
          <Fromgroup id="password">
            <FormLabel for="password">Password</FormLabel>
            <FormControl type="password" ref={passwordRef} required />
          </Fromgroup>
          <Fromgroup id="password-confirm">
            <FormLabel for="password">Password Confirmation</FormLabel>
            <FormControl type="password" ref={passwordConfirmRef} required />
          </Fromgroup>
          <FormButton disabled={loading} type="submit">Sign Up</FormButton>
        </Form>
        <div>
          <p>Already have an account?</p>
        </div>
      </Cardcontent>
    </Cardwrap>
  );
};

export default Signup;
