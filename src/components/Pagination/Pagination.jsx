import * as page from './styled';
import PropTypes from 'prop-types';

export default function Pagination({ children }) {
  return <page.PaginationWrapper>{children}</page.PaginationWrapper>;
}

Pagination.propTypes = {
  children: PropTypes.node,
};
