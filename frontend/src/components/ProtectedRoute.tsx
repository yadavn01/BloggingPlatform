import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({element}) => {
    const {token} = useAuth();

    if(!token) {
       return  <Navigate to="/login" />;
    }
    return element;
}

export default ProtectedRoute;