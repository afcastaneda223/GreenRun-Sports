import React, { useRef, useState } from 'react';
import {
  Cardcontent, Cardwrap, Form, Fromgroup, FormControl, FormLabel, Button,
} from './styles/styles.style';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value0) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      return setError('Failed to create account');
    }
    setLoading(false);
    return true;
  }

  return (
    <Cardwrap>
      <Cardcontent>
        <h1>Welcome</h1>
        {error && alert('error')}
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
        </Form>
        <div>
          <p>Already have an account?</p>
        </div>
        <Button disabled={loading} className="mt-4 rounded-pill" type="submit">Sign Up</Button>
      </Cardcontent>
    </Cardwrap>
  );
};

export default Signup;
