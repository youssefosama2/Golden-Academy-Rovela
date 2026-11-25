import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./Pricing.css";
import { handleJoin } from "../../utils/joinHandler.js";

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      id: "monthly",
      number: "01",
    },
    {
      id: "quarterly",
      number: "02",
    },
    {
      id: "halfyear",
      number: "03",
    },
    {
      id: "annual",
      number: "04",
    },
  ];

  return (
    <>
      <section className="pricing-section" id="pricing">
        <Container>
          <div className="pricing-header text-center">
            <span className="pricing-eyebrow">
              {t("pricing.title")}
            </span>

            <h2 className="pricing-main-title">
              {t("pricing.heading")}
            </h2>

            <p className="pricing-description">
              {t("pricing.desc")}
            </p>

            <div className="pricing-header-line"></div>
          </div>

          <Row className="g-3 g-lg-4 pricing-grid">
            {plans.map((item) => (
              <Col
                key={item.id}
                xs={6}
                lg={3}
                className="pricing-column"
              >
                <div className="pricing-card">
                  <div className="pricing-card-top">
                    <span className="pricing-number">
                      {item.number}
                    </span>
                  </div>

                  <div className="pricing-card-content">
                    <h3 className="pricing-plan-title">
                      {t(`pricing.cards.${item.id}.title`)}
                    </h3>

                    <div className="pricing-price-box">
                      <div className="pricing-price">
                        <span className="pricing-price-value">
                          تواصل معنا
                        </span>
                      </div>

                      <span className="pricing-duration">
                        لمعرفة الأسعار والتفاصيل
                      </span>
                    </div>

                    <p className="pricing-card-description">
                      {t(`pricing.cards.${item.id}.desc`)}
                    </p>
                  </div>

                  <div className="pricing-card-footer">
                    <Button
                      className="pricing-button"
                      onClick={() =>
                        handleJoin({
                          plan: t(`pricing.cards.${item.id}.plan`),
                        })
                      }
                    >
                      {t("pricing.button")}
                      <span className="pricing-button-arrow">
                        →
                      </span>
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="quote-section">
        <Container>
          <div className="pricing-quote-content">
            <span className="pricing-quote-line"></span>

            <h2>{t("pricing.quote")}</h2>

            <span className="pricing-quote-line"></span>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pricing;
