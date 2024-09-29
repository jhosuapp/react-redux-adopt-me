"use client";
import React from "react";

import { Header } from '@/app/shared/layout/index';

interface IAuthLayout {
    children: React.ReactNode;
}

export default function LoginLayout( { children }:IAuthLayout ) {
    return (
        <>
            <Header />
            { children }
        </>
    )
}
