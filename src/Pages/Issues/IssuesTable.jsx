import React from 'react';
import {
  Table, TableRow, TableColumn, TableHeader, TableBody, TableBodyWrapper,
} from '../../components/Table/index';


const IssuesTable = () => (
  <Table>
    <TableColumn>
      <TableRow>
        <TableHeader>Here is Table Header</TableHeader>
      </TableRow>

      <TableBodyWrapper bgColor="white">
        <TableRow>
          <TableBody>
            Here is Table Body
          </TableBody>
        </TableRow>

        <TableRow>
          <TableBody>
            Here is Table Body
          </TableBody>
        </TableRow>
      </TableBodyWrapper>
    </TableColumn>

    <TableColumn>
      <TableRow>
        <TableHeader>Here is Table Header</TableHeader>
      </TableRow>

      <TableBodyWrapper bgColor="white">
        <TableRow>
          <TableBody>
            Here is Table Body
          </TableBody>
        </TableRow>

        <TableRow>
          <TableBody>
            Here is Table Body
          </TableBody>
        </TableRow>
      </TableBodyWrapper>
    </TableColumn>


  </Table>
);

export default React.memo(IssuesTable);
