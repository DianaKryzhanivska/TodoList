import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <main>
        <Header />
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
        <footer></footer>
      </main>
    </>
  );
};

export default Layout;
