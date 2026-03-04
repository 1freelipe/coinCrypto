import PropTypes from 'prop-types';

import {
  getFormattedUpdateDate,
  formatCoin,
  formatSymbol,
} from '../../helpers/utils/formatters';
import * as unique from './styled';

export default function CoinHeader({ coins }) {
  if (!coins || coins.length === 0) return null;

  const uniqueCoin = coins[0];
  const dateForm = getFormattedUpdateDate(coins);

  return (
    <unique.DivInformation>
      <unique.DivWrapperInformation>
        <unique.Information>
          Last Updated: <strong>{dateForm}</strong>
        </unique.Information>
        <unique.Information>
          Current Currency: <strong>{formatSymbol(uniqueCoin.symbol)}</strong>
        </unique.Information>
        <unique.Information>
          Total Volume: <strong>{uniqueCoin.total_volume}</strong>
        </unique.Information>
        <unique.Information>
          Total Supply: <strong>{uniqueCoin.total_supply}</strong>
        </unique.Information>
        <unique.Information>
          All-Time-High: <strong>{formatCoin.format(uniqueCoin.ath)}</strong>
        </unique.Information>
        <unique.Information>
          Circulating-Supply: <strong>{uniqueCoin.circulating_supply}</strong>
        </unique.Information>
        <unique.Information>
          Market Cap Rank: <strong>#{uniqueCoin.market_cap_rank}</strong>
        </unique.Information>
        <unique.Information>
          Low 24hr <strong>{formatCoin.format(uniqueCoin.low_24h)}</strong>
        </unique.Information>
      </unique.DivWrapperInformation>
    </unique.DivInformation>
  );
}

CoinHeader.propTypes = {
  coins: PropTypes.element,
};
