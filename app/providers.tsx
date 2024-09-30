"use client";
import { NextUIProvider } from "@nextui-org/react";
import ReduxStoreWrapper from "./shared/redux/wrapper";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxStoreWrapper>
        <NextUIProvider>
            {children}
        </NextUIProvider>
    </ReduxStoreWrapper>
  );
}
