import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <header></header>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
        <footer></footer>
      </main>
    </>
  );
};

export default Layout;
