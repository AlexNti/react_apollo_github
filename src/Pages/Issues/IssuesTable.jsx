import React from 'react';
import {
  Table, TableRow, TableColumn, TableHeader, TableBody, TableBodyWrapper,
} from '../../components/Table/index';

const renderTableRow = (headerKey, data) => {
  if (!data || !data.repository) return <></>;
  const { issues } = data.repository;
  const { edges } = issues;


  const row = edges.map((edge) => (
    <TableBodyWrapper bgColor="white">
      <TableRow>
        <TableBody>
          {edge.node[headerKey]}
        </TableBody>
      </TableRow>
    </TableBodyWrapper>
  ));

  return row;
};


const IssuesTable = ({ headerKeys = [], data }) => (
  <Table>
    {headerKeys.map((headerKey, index) => (
      <TableColumn key={headerKey}>
        <TableRow>
          <TableHeader>{headerKey}</TableHeader>
        </TableRow>
        {renderTableRow(headerKey, data)}
      </TableColumn>
    ))}


  </Table>
);

export default React.memo(IssuesTable);
