import React from 'react';

const Layout = ({children}) => {
    return (
        <div className={"min-h-[100vh] bg-black justify-center flex flex-col min-w-full"}>
            {children}
        </div>
    );
};

export default Layout;