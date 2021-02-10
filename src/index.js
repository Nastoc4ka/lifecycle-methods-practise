import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToggleApp from "././components/rate/ToggleApp";
import AppPhonebook from "././components/phone_book/AppPhonebook";


ReactDOM.render(

  <React.StrictMode>
      <>
          <AppPhonebook/>
          <ToggleApp/>
      </>
  </React.StrictMode>,
  document.getElementById('root')
);
