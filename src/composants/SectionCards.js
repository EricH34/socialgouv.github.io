import React from "react";
import PropTypes from "prop-types";
import { Card } from ".";

import startups from "../data/startups.json";

function withStartups(Cmp) {
  const CmpWithStartups = props => (
    <Cmp
      {...props}
      startups={startups.filter(
        s => (props.startups ? props.startups.indexOf(s.id) > -1 : true)
      )}
    />
  );
  return CmpWithStartups;
}

const SectionCards = ({
  title = "Nos autres startups",
  cards,
  className,
  startups
}) => (
  <section className={"section " + className}>
    <div className="container">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div className="row" style={{ color: "black", justifyContent: "center" }}>
        {cards && cards.map((Card, i) => <Card key={i} />)}
        {startups.map(startup => (
          <Card key={startup.href} {...startup} />
        ))}
      </div>
    </div>
  </section>
);

SectionCards.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  startups: PropTypes.arrayOf(PropTypes.object)
};

export default withStartups(SectionCards);
