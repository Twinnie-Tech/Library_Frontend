import React, { useEffect, useState } from 'react'
import { msalInstance } from './msal'
import { MsalProvider, useMsal, useMsalAuthentication } from '@azure/msal-react'
import { InteractionRequiredAuthError, InteractionType } from '@azure/msal-browser'

export const AuthContext = React.createContext({} as {
    user: any,
    updateUser: (user: any) => void
});

const useProvideAuth = () => {
    const [user, setUser] = useState<any>(null);
    const updateUser = (user: any) => {
        setUser(user);
    }
    return {
        user,
        updateUser
    }
};
export const AuthProvider = ({ children }: any) => {
    const ctxValue = useProvideAuth();
    return (
        <MsalProvider instance={msalInstance}>
            <AuthContext.Provider value={ctxValue}>
                <AutoLogin>
                    {children}
                </AutoLogin>

            </AuthContext.Provider>
        </MsalProvider>
    )
}
function AutoLogin({ children }: any) {
    const request = {
        scopes: ["User.Read"]
    };
    const { login, result, error } = useMsalAuthentication(
        InteractionType.Silent,
        request
    );
    useEffect(() => {
        if (error instanceof InteractionRequiredAuthError) {
            login(InteractionType.Redirect, request);
        }
    }, [error]);
    const { accounts } = useMsal();
    return <>{children}</>
}