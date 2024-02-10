import * as React from 'react';

export const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h1>{name}</h1>
    <span>{email}</span>
    <p>{message}</p>
  </div>
);