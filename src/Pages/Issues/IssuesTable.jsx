import React from 'react';
import {
  Table, TableRow, TableColumn, TableHeader, TableBody, TableBodyWrapper,
} from '../../components/Table/index';
import getNestedObjectValue from '../../utils/getNestedObjectValue';
// TODO ADD FILTER DROPDOWN
const renderTableRow = (tableKey, data) => {
  if (!data || !data.repository) return <></>;
  const { issues } = data.repository;
  const { edges } = issues;
  const clonedEdgesArray = [...edges];
  const sortByCommentCount = clonedEdgesArray.sort((a, b) => b.node.comments.totalCount - a.node.comments.totalCount);
  // const sortByCreatedAt = sortByCommentCount.sort((a, b) => new Date(a.node.createdAt) - new Date(b.node.createdAt));


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


const IssuesTable = ({ tableKeys = [], data }) => (
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

export default React.memo(IssuesTable);
