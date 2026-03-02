import React from 'react';
import PropTypes from 'prop-types';

import * as card from './styled';

export default function CardCoin({ children }) {
  return <card.CardCoin>{children}</card.CardCoin>;
}

CardCoin.propTypes = {
  children: PropTypes.node,
};
