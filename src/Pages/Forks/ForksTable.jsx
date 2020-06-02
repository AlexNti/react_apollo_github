import React from 'react';
import PropTypes from 'prop-types';

import {
  Table, TableRow, TableColumn, TableHeader, TableBody, TableBodyWrapper,
} from '../../components/Table/index';
import getNestedObjectValue from '../../utils/getNestedObjectValue';
// TODO ADD FILTER DROPDOWN
const renderTableRow = (tableKey, data) => {
  if (!data || !data.repository) return <></>;
  const { forks } = data.repository;
  const { edges } = forks;
  const clonedEdgesArray = [...edges];
  const sortByCommentCount = clonedEdgesArray.sort(
    (a, b) => b.node.stargazers.totalCount - a.node.stargazers.totalCount,
  );


  const row = sortByCommentCount.map((edge) => (
    <TableBodyWrapper key={edge.node.id} bgColor="white">
      <TableRow>
        <TableBody>
          {getNestedObjectValue(edge.node, tableKey.path)}
        </TableBody>
      </TableRow>
    </TableBodyWrapper>
  ));

  return row;
};


const ForksTable = ({ tableKeys, data }) => (
  <Table>
    {tableKeys.map((tableKey) => (
      <TableColumn key={tableKey.header}>
        <TableRow>
          <TableHeader>{tableKey.header}</TableHeader>
        </TableRow>
        {renderTableRow(tableKey, data)}
      </TableColumn>
    ))}
  </Table>
);

ForksTable.defaultProps = {
  tableKeys: [],
  data: {},
};

ForksTable.propTypes = {
  /**
   * Provide the tablekeys that for the header and column to be displayed
   *  */
  tableKeys: PropTypes.arrayOf(PropTypes.object),
  /**
   * Provide the data to be displayed in the table
   *  */
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,


};

export default React.memo(ForksTable);
