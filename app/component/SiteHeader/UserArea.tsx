import React, { useEffect, useState, useRef } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequest } from "../AuthProvider/msal";
import { InteractionStatus } from '@azure/msal-browser';
const UserArea = () => {
    const isAuthenticated = useIsAuthenticated();
    const { inProgress } = useMsal();
    const isProgressing = inProgress === InteractionStatus.Startup
        || InteractionStatus.HandleRedirect;

    return isAuthenticated
        ? <UserWelcome />
        : <SignInButton />;
}

function FormatUser(user: string): string {
    const splitUserName = user.split(" ");
    const firstInitial = splitUserName[0][0];
    const lastInitial = splitUserName[1][0]?.toUpperCase();
    return firstInitial + lastInitial
}
function UserWelcome(): React.JSX.Element {
    const { accounts, instance } = useMsal();

    const acct = accounts[0];
    instance.setActiveAccount(acct);
    const user = acct?.name || "";

    let parentContainer = useRef<HTMLDivElement>(null);
    const [parentContainerHeight, setParentContainerHeight] = useState(0);

    useEffect(() => {
        if (parentContainer.current) setParentContainerHeight(parentContainer.current.clientHeight)
    }, [])

    return (
        <div ref={parentContainer} className="flex flex-col relative 
        hover:cursor-pointer group/dropdown
        ">
            <div className="flex flex-col p-5">
                <p className="text-xl text-lime-500 border-solid rounded-full border-lime-500 border-[1px] p-2">
                    {FormatUser(user)}
                </p>
                {/*<p className="text-xs text-slate-50">*/}
                {/*    {acct.username}*/}
                {/*</p>*/}
            </div>

            <div
                style={{ top: `${parentContainerHeight}px`, zIndex: "10" }}
                className='hidden group-hover/dropdown:flex flex-col items-left justify-center
            border-solid border-[1px] border-slate-300 
            bg-white rounded shadow-lg w-full min-h-full 
            absolute left-0
            '>
                <button className="text-lime-500 w-fit p-2 border-l-[3px] border-solid border-lime-500
                transition-transform hover:translate-x-[5px]
                " onClick={() => instance.logout()}>Log Out</button>
            </div>

        </div>
    );
};

function SignInButton() {
    const isLoggedIn = useIsAuthenticated();
    const { instance } = useMsal();

    const login = () => {
        console.log("logging in user");
        alert("Testing values");
        instance.loginRedirect(loginRequest).catch(e => console.error(e));
    }

    return (
        <button className="text-xl text-lime-500" type='button' onClick={() => console.log("Hello")}>
            Login
        </button>
    )
    // if (!isLoggedIn) {
    //     return (

    //     );
    // } else {
    //     return null;
    // }
}


export default UserArea
