import React, { useEffect, useState } from 'react';
import './ApiTable.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


export default function ApiTable({url , refresh, scope}) {
  const [apiData, setApiData] = useState(null)

  const fetchData = () => {
    url && axios.get(url).then( res => {
      console.log("res api: ", res);
      setApiData(res.data.entries)
    }). catch(
      err => console.error("error :", err)
    )
  }

  useEffect(() => {
    const refreshTime = setInterval(() => fetchData(), refresh);
    return () => {
      clearInterval(refreshTime);
    };
  }, [url])

  const header = apiData && Object.keys(apiData[0]);

  console.log("data : ", apiData && Object.keys(apiData[0]));
  
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {
                  apiData && header.map((key, index) => <StyledTableCell key={index}>{key}</StyledTableCell>)
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData && apiData.map((row, index) => (
                (index >= scope[0] && index <= scope[1]) &&
                <StyledTableRow key={index}>
                  {
                    header.map((key, index) => <StyledTableCell key={`${index}${key}`}>{row[key].toString()}</StyledTableCell>)                    
                  }
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}
