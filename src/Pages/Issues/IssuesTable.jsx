import React from 'react';
import {
  Table, TableRow, TableColumn, TableHeader, TableBody, TableBodyWrapper,
} from '../../components/Table/index';


const IssuesTable = ({ headerKeys = [], data }) => (
  <Table>
    {headerKeys.map((headerKey, index) => (
      <TableColumn>
        <TableRow>
          <TableHeader>{headerKey}</TableHeader>
        </TableRow>

        <TableBodyWrapper bgColor="white">
          <TableRow>
            <TableBody>
              Here is Table Body
            </TableBody>
          </TableRow>
        </TableBodyWrapper>

      </TableColumn>
    ))}


  </Table>
);

export default React.memo(IssuesTable);
