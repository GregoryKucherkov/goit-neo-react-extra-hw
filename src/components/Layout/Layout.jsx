import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={css.layout}>
      <AppBar />
      {/* <main>{children}</main> */}
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}

export default Layout;
