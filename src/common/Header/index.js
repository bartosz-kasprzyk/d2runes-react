import { toRunes, toRunewords, toSets, toUniques } from "../config/routes";
import { LogoIcon1, LogoIcon2, LogoWrapper, NavSection, StyledCorner, StyledHeader, StyledNavLink, StyledSigil, StyledUnderline } from "./styled";
import d2r from "../../images/Logo/d2r.gif"
import archives from "../../images/Logo/archives.png"
import runes from "../../images/Navigation/runes.png"
import runewords from "../../images/Navigation/runewords.png"
import uniques from "../../images/Navigation/uniques.png"
import sets from "../../images/Navigation/sets.png"
import underline from '../../images/Ornaments/underline.png'
import sigil from '../../images/Ornaments/sigil.png'

export const Header = () => {
    return (
        <StyledHeader>
            <StyledCorner $position="left" />
            <StyledCorner />
            <LogoWrapper to={toRunes()}>
                <LogoIcon1 src={d2r} alt="Diablo II Logo" />
                <LogoIcon2 src={archives} alt="Archives Logo" />
            </LogoWrapper>
            <NavSection>
                <li>
                    <StyledNavLink to={toRunes()}>
                        <img src={runes} alt="Runes" />
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toRunewords()}>
                        <img src={runewords} alt="Runewords" />
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toUniques()}>
                        <img src={uniques} alt="Uniques" />
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toSets()}>
                        <img src={sets} alt="sets" />
                    </StyledNavLink>
                </li>
            </NavSection >
            <StyledUnderline src={underline} />
            <StyledSigil src={sigil} />
        </StyledHeader>
    )
};