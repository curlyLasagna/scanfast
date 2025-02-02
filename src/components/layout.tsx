import React from 'react';

export const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
        <div className='min-h-screen flex flex-col'>
            <main className='flex-1'> {children}
            </main>
        </div>
        </>
    )
}