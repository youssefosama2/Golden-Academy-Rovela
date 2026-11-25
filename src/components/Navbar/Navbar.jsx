import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const THEME_KEY = "academy-site-theme";

const NavBar = () => {
  const { t } = useTranslation();

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || "light";
    } catch {
      return "light";
    }
  });

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Theme still works for the current session.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const closeMenu = () => setExpanded(false);

  const navLinks = [
    { to: "/#about", label: t("navbar.about") },
    { to: "/#pricing", label: t("navbar.pricing") },
    { to: "/#player", label: t("navbar.stars") },
    { to: "/#programs", label: t("navbar.programs") },
    { to: "/#joinUs", label: t("navbar.join") },
  ];

  return (
    <Navbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="academy-navbar"
    >
      <Container>
        <Navbar.Brand
          as={HashLink}
          to="/#top"
          className="academy-navbar-brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <img src="/assets/img/image-86b8eaf5.jpg" alt="أكاديمية جولدن" />
          </span>
          <span className="brand-name">{t("navbar.brand")}</span>
        </Navbar.Brand>

        <div className="navbar-mobile-controls">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "تفعيل الوضع الليلي"
                : "تفعيل الوضع النهاري"
            }
            title={theme === "light" ? "الوضع الليلي" : "الوضع النهاري"}
          >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>

          <Navbar.Toggle
            aria-controls="academy-navbar-collapse"
            aria-label="فتح القائمة"
          />
        </div>

        <Navbar.Collapse id="academy-navbar-collapse">
          <Nav className="academy-nav-links">
            {navLinks.map((link) => (
              <HashLink
                key={link.to}
                className="nav-link"
                to={link.to}
                onClick={closeMenu}
                scroll={(el) =>
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                {link.label}
              </HashLink>
            ))}

            <div className="navbar-actions">
              <button
                type="button"
                className="theme-toggle desktop-theme-toggle"
                onClick={toggleTheme}
                aria-label={
                  theme === "light"
                    ? "تفعيل الوضع الليلي"
                    : "تفعيل الوضع النهاري"
                }
                title={theme === "light" ? "الوضع الليلي" : "الوضع النهاري"}
              >
                <FontAwesomeIcon
                  icon={theme === "light" ? faMoon : faSun}
                />
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;