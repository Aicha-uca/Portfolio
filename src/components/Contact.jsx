import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';


const Contact= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/contact', {
      name,
      email,
      message
    })
    .then(response => {
      setName('');
      setEmail('');
      setMessage('');
      setSuccessMessage('Your message has been sent. We will get back to you shortly!');
      setErrorMessage('');
    })
    .catch(error => {
      console.log(error);
      setErrorMessage('An error occurred while sending your message. Please try again later.');
      setSuccessMessage('');
    });
  }

  return (
    <div>
      <h1>Contact me</h1>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label>Message:</label>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export {Contact};