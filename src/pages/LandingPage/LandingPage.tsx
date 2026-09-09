import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/layout/NavBar/NavBar";

import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ContentWrapper title={"title"}>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </>
  );
};
