import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '156544960537-rmdmlkm9g8o4nh0a2mba4nrc2rsvlt1v.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;