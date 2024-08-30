import React, { useRef, useState } from 'react';
import { StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, TableWrapper } from "../../common/Table/styled";
import useLoadContent from '../../common/hooks/useLoadContent'
import { Container } from '../../common/Container';
import { RunewordButton, StyledNavigation, StyledText } from './styled';

const RunewordList = () => {
    const content = useLoadContent();
    const rowRefs = useRef({});

    const [highlightedRow, setHighlightedRow] = useState(null);

    const scrollToRuneword = (runeword) => {
        if (rowRefs.current[runeword]) {
            const targetRow = rowRefs.current[runeword];
            targetRow.scrollIntoView({ behavior: 'smooth' });

            setHighlightedRow(runeword);

            setTimeout(() => {
                setHighlightedRow(null);
            }, 1000);
        }
    };

    if (!content) {
        return <div>Loading...</div>;
    }

    const runewords = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runeword'))
        .map(key => content.content.runewordsTable[key]);

    const formatText = (text) => {
        return text.split('\n').map((part, index) => (
            <React.Fragment key={index}>
                {part}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <Container>
            <StyledText>
                <strong>Slowa runiczne</strong> [ang. <i>Rune Words</i>] sa kombinacja kilku roznych run, ktore maja
                na celu stworzenie poteznej broni badz uzbrojenia.
                Odpowiednia kolejnosc run w przedmiotach z gniazdami pozwala otrzymac nie tylko podstawowe atrybuty run, ale rowniez bonusowe, ktore zwiekszaja moc
                przedmiotu.
                Wiekszosc najwazniejszych broni czy uzbrojenia w grze pochodzi ze slow runicznych.
                Wiele z nich jest bardzo ciezko zdobyc z powodu bardzo rzadkiego wystepowania run na wysokich poziomach.
                Poza runami trzeba rowniez znalezc odpowiedni przedmiot.
                Nalezy wspomniec, ze slowa runiczne zadajace wysokie obrazenia najlepiej laczyc z przedmiotami, ktore maja rowniez wysoki podstawowy wspolczynnik ataku.
                Doswiadczeni gracze bardzo dlugo poszukuja odpowiednich przedmiotow oraz run aby ostatecznie stworzyc wymarzony przedmiot.
                Oto kilka najbardziej popularnych slow runicznych:
            </StyledText>
            <StyledNavigation>
                {runewords.map((runeword) => (
                    <ul key={runeword[0]}>
                        <li>
                            <RunewordButton onClick={() => scrollToRuneword(runeword[0])}>
                                {runeword[0]}
                            </RunewordButton>
                        </li>
                    </ul>
                ))}
            </StyledNavigation>
            <TableWrapper>
                <StyledTable>
                    <thead>
                        <TableRow $index={0}>
                            <ColumnHeader>{content.content.runewordsTable.header1}</ColumnHeader>
                            <ColumnHeader>{content.content.runewordsTable.header2}</ColumnHeader>
                            <ColumnHeader>{content.content.runewordsTable.header3}</ColumnHeader>
                            <ColumnHeader>{content.content.runewordsTable.header4}</ColumnHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        {runewords.map((runeword, index) => (
                            <TableRow
                                key={index}
                                $index={index + 1}
                                ref={el => rowRefs.current[runeword[0]] = el}
                                $highlight={highlightedRow === runeword[0]}
                            >
                                <RowHeader>{formatText(runeword[0])}</RowHeader>
                                <TableCell>{formatText(runeword[1])}</TableCell>
                                <TableCell>{formatText(runeword[2])}</TableCell>
                                <TableCell>
                                    {formatText(runeword[3])}
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </Container>
    );
};

export default RunewordList;