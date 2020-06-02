import React from 'react';
import {
  Table, TableRow, TableColumn, TableHeader, TableBody, TableBodyWrapper,
} from '../../components/Table/index';
import getNestedObjectValue from '../../utils/getNestedObjectValue';

const renderTableRow = (tableKey, data) => {
  if (!data || !data.repository) return <></>;
  const { issues } = data.repository;
  const { edges } = issues;


  const row = edges.map((edge) => (
    <TableBodyWrapper bgColor="white">
      <TableRow>
        <TableBody>
          {getNestedObjectValue(edge.node, tableKey.path)}
        </TableBody>
      </TableRow>
    </TableBodyWrapper>
  ));

  return row;
};


const IssuesTable = ({ tableKeys = [], data }) => (
  <Table>
    {tableKeys.map((tableKey, index) => (
      <TableColumn key={tableKey.header}>
        <TableRow>
          <TableHeader>{tableKey.header}</TableHeader>
        </TableRow>
        {renderTableRow(tableKey, data)}
      </TableColumn>
    ))}


  </Table>
);

export default React.memo(IssuesTable);
