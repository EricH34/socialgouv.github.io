import React from "react";
import PropTypes from "prop-types";

import { Section, Layout, AllActus, Hero } from "../src/composants";
import news from "../src/data/news";

// https://github.com/facebook/react/issues/377
const News = ({ title, date, html }) => (
  <div className="row">
    <div
      className="panel"
      style={{ width: "80%", margin: "20px auto", paddingTop: 0 }}
    >
      <div className="panel__header" id={date}>
        <h4>
          {title}
          <small className="panel__header-extra" style={{ float: "right" }}>
            {date}
          </small>
        </h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
);

News.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string
};

const Actus = () => (
  <Layout>
    <Hero
      title="Toutes les actualités"
      tagline=""
      style={{ backgroundImage: `url(/static/images/all-actus.jpg)` }}
    />
    <Section className="section-white" title="Brèves" subTitle="">
      {news.map(n => (
        <News {...n} key={n.title} />
      ))}
    </Section>
    <Section className="section-color" title="Articles de fond" subTitle="">
      <div className="row" style={{ color: "black" }}>
        <AllActus.jourj />
        <AllActus.actuSaison2 />
        <AllActus.actuCdtn1 />
        <AllActus.actuBoard1 />
      </div>
    </Section>
  </Layout>
);

export default Actus;
