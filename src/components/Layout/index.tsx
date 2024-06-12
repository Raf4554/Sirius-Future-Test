import React from "react";
import { ChildrenNode } from "../../interfaces/index";
import Aside from "../Aside";
import style from "../Layout/Layout.module.css"
import Header from "../Header";
// import { Header } from "../Header/index";
// import { Aside } from "../Aside/index";
interface Props{
  children: React.ReactNode;
  active:boolean
}
const Layout: React.FC<Props> = ({ children,active}) => {
    const {mainDiv,body,Children}=style
    
  return (
    <div className={mainDiv}>
      
      <Aside
      active={active}
      />
      <main className={body}>
        <Header />
        <div className={Children}>{children}</div>
      </main>
    </div>
  );
};
export default React.memo(Layout);
