import PropTypes from 'prop-types';
import React from 'react';

export function Section({ children, title }) {
  return (
    <section>
      {title && <h2>{title} </h2>}
      {children}
    </section>
  );
  Section.prototypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

}
