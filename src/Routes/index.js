import React, { useContext } from 'react';
import LoginRoutes from './loginStack.routes';
import AppRoutes from './appStack.routes';
import { AuthContext } from '../contexts/AuthContext';


const Routes = () => {
    const { user } = useContext(AuthContext);

    return (
        user ? <AppRoutes /> : <LoginRoutes />
    )
}

export default Routes;