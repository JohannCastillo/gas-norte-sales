"use client";

import AppProvider from "context/appContext";
import { Flowbite } from "flowbite-react";
// import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <Flowbite>
      {/* <SessionProvider> */}
        <AppProvider>{children}</AppProvider>
      {/* </SessionProvider> */}
    </Flowbite>
  );
};
