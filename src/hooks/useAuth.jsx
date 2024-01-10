import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

//Custom hook to use AuthContext
function useAuth() {
    return useContext(AuthContext);
}

export { useAuth };

