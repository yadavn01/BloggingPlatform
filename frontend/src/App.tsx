import React, { useEffect, useState } from 'react';
import './App.css';
import { getMessage } from './appService';

const App: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
      getMessage().then(response => {
        setMessage(response.data.message);
      }).catch(error => {
        console.log("there's an error",error);
      })
    },[]);

    return (
   <div>
   <h2>{message}</h2>
   </div>
  );
};

export default App;
