import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export function Header() {
    const { t } = useTranslation();

    const [lang, setLang] = useState("en");
    const langChange = (chosenLang) => {
        i18n.changeLanguage(chosenLang);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">{t('Score Board')}</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <LinkContainer to="#en" onClick={(e) => langChange('en')}>
                                <Nav.Link>EN</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="#cn" onClick={(e) => langChange('cn')}>
                                <Nav.Link>汉语</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
