import React, { useContext, useEffect , useState} from "react";
import { TokenContext } from "../../TokenContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { token , setToken} = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Call the logout API
        const response = await fetch(`http://localhost:8080/api/employees/logout?PrivateKey=${token}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        if (response.ok) {
          setToken("");
          navigate("/login");
        }
      } catch (error) {
        console.log(`Error occurred: ${error}`);
      }
    };

    handleLogout(); // Call the function inside useEffect

    return () => {
      // Clean-up code if needed
    };
  }, [token]);

  // Component rendering
  return (
    <div>
      
    </div>
  );
}

export default Logout;
