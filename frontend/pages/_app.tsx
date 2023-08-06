import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import "mapbox-gl/dist/mapbox-gl.css";

import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";

import { getCurrentUser } from "@/pages/api/auth";
import { User } from "@/typings";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export const AuthContext = createContext(
  {} as {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: User | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  }
);

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const router = useRouter();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      if (res?.status === 200) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.currentUser);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  // Redirect unauthenticated users to the sign-in page
  useEffect(() => {
    if (
      !loading &&
      !isSignedIn &&
      (router.pathname === "/events/create" || router.pathname === "/place")
    ) {
      router.push("/signin");
    }
  }, [loading, isSignedIn, router]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
      }}
    >
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
