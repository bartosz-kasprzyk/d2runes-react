import { toRunes, toRunewords, toUniques } from "../../config/routes";
import { LogoIcon1, LogoIcon2, LogoWrapper, NavSection, StyledNavLink } from "./styled";
import d2r from "../../../images/Logo/d2r.gif"
import archives from "../../../images/Logo/archives.png"
import RunesPageEn from "../../../images/Navigation/RUNES.png"
import RunesPagePl from "../../../images/Navigation/RUNY.png"
import RunewordsPageEn from "../../../images/Navigation/RUNEWORDS.png"
import RunewordsPagePl from "../../../images/Navigation/SLOWA RUNICZNE.png"
import UniquesPageEn from "../../../images/Navigation/UNIQUES.png"
import UniquesPagePl from "../../../images/Navigation/UNIKATY.png"
import useLoadContent from "../../hooks/useLoadContent";

export const Navigation = () => {
    const state = useLoadContent();
    const content = state.content;

    if (!content) {
        return;
    }

    return (
        <>
            <LogoWrapper to={toRunes()}>
                <LogoIcon1 src={d2r} alt="Diablo II Logo" />
                <LogoIcon2 src={archives} alt="Archives Logo" />
            </LogoWrapper>
            <NavSection>
                <li><StyledNavLink to={toRunes()}><img src={content.content.lang === "en" ? RunesPageEn : RunesPagePl} alt="Runes"></img></StyledNavLink></li>
                <li><StyledNavLink to={toRunewords()}><img src={content.content.lang === "en" ? RunewordsPageEn : RunewordsPagePl} alt="Runewords"></img></StyledNavLink></li>
                <li><StyledNavLink to={toUniques()}><img src={content.content.lang === "en" ? UniquesPageEn : UniquesPagePl} alt="Uniques"></img></StyledNavLink></li>
            </NavSection >
        </>
    )
};