import React from 'react';
import {
  Table, TableRow, TableColumn, TableHeader, TableBody, TableBodyWrapper,
} from '../../components/Table/index';


const IssuesTable = () => (
  <Table>
    <TableColumn>
      <TableRow>
        <TableHeader>Number</TableHeader>
      </TableRow>

      <TableBodyWrapper bgColor="white">
        <TableRow>
          <TableBody>
            Here is Table Body
          </TableBody>
        </TableRow>
      </TableBodyWrapper>

    </TableColumn>

    <TableColumn>
      <TableRow>
        <TableHeader>Title</TableHeader>
      </TableRow>

    </TableColumn>

    <TableColumn>
      <TableRow>
        <TableHeader>Author</TableHeader>
      </TableRow>

    </TableColumn>

    <TableColumn>
      <TableRow>
        <TableHeader>Comment count</TableHeader>
      </TableRow>

    </TableColumn>

    <TableColumn>
      <TableRow>
        <TableHeader>Created At</TableHeader>
      </TableRow>

    </TableColumn>

    <TableColumn>
      <TableRow>
        <TableHeader>State</TableHeader>
      </TableRow>

    </TableColumn>


  </Table>
);

export default React.memo(IssuesTable);
