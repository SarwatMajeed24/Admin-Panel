"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
interface PropsType{
    children: ReactNode,
}

export const AuthProvider = ({children}: PropsType) => {
  return <SessionProvider>
    {children}
  </SessionProvider>
  
}
