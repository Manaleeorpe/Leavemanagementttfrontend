import React, { createContext, useState, useEffect } from 'react';

export const TokenContext = createContext();

const TokenContextProvider = (props) => {
  const [token, setToken] = useState('');
  const [person, setPerson] = useState('');
  const [employeeid, setEmployeeid] = useState('');
  const [emailid, setEmailid] = useState('');

  useEffect(() => {
    const fetchEmployeeId = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/employees/email/${emailid}`);
        const data = await response.json();
        setEmployeeid(data);
      } catch (error) {
        console.error('Error fetching employee ID:', error);
      }
    };

    if (emailid) {
      fetchEmployeeId();
    }
  }, [emailid]);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        person,
        setPerson,
        employeeid,
        setEmployeeid,
        emailid,
        setEmailid,
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
