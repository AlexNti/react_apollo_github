import styled from '@emotion/styled';

export const Table = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '500px',
});

export const TableRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
}, ({
  bgColor,
}) => (bgColor
  ? { backgroundColor: bgColor }
  : undefined));

export const TableColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
}, ({
  bgColor,
}) => (bgColor
  ? { backgroundColor: bgColor }
  : undefined));

export const TableHeader = styled('div')({
  fontSize: '15px',
  color: 'gray',
  height: '40px',
});

export const TableBodyWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxShadow: '6px 4px 5px 0px rgba(0,0,0,0.10)',
  marginBottom: '10px',
}, ({
  bgColor,
}) => (bgColor
  ? { backgroundColor: bgColor }
  : undefined));

export const TableBody = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '50px',
  padding: '10px',
  boxSizing: 'border-box',
  textAlign: 'center',
  verticalAlign: 'middle',
  lineHeight: '30px',
});
