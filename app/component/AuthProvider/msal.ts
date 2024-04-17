import * as msal from "@azure/msal-browser";

const msalConfig: msal.Configuration = {
    auth: {
        clientId: "", // This is the ONLY mandatory field that you need to supply.
        authority: " ",
        redirectUri: 'http://localhost:5173', // Points to window.location.origin. You must register this URI on Azure Portal/App Registration.
        // postLogoutRedirectUri: 'http://localhost:3000', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: true, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};
export const loginRequest = {
    scopes: ['User.Read']
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export { msalInstance };
