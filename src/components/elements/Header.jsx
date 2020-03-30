import React from "react";
import RMLogo from "../images/reactMovie_logo.png"
import TMDBLogo from "../images/tmdb_logo.svg"
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from "../styles/StyledHeader"

const Header = () => (<StyledHeader>
    <StyledRMDBLogo src={RMLogo} alt="RMLogo"/>
    <StyledTMDBLogo src={TMDBLogo} alt="TMDBLogo"/>
</StyledHeader>);

export default Header;