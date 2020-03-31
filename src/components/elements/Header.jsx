import React from "react";
import RMLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from "../styles/StyledHeader";
import { Link } from "@reach/router";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <StyledRMDBLogo src={RMLogo} alt="RMLogo" />
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="TMDBLogo" />
    </div>
  </StyledHeader>
);

export default Header;
