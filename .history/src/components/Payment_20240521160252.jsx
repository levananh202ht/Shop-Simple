import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export const Payment = () => {
  const listCarts = useSelector((state) => state.cartSlice.carts);
  
  const [fromData,setFromData] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  const handleChange = (e) => {
    const {name,value } = e.target;
    setFromData({
      ...fromData,
      [name]: value,
    })
  }
  console.log(fromData,"fromDatafromData");
  return (
    <div className='mt-20 px-14'>
      <h1>Checkout</h1>
      <div className='flex'>
        <form  onSubmit={handleSubmit}>
          <div className=''>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="name"
                  id="outlined-size-small"
                  onChange={handleChange}
                  name="name"
                />
              </div>
              <div>
                <TextField
                  label="email"
                  id="outlined-size-small"
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div>
                <TextField
                  label="phone"
                  id="outlined-size-small"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="address"
                  name="address"
                  onChange={handleChange}
                  multiline
                  maxRows={4}
                />
              </div>
            </Box>
          </div>
        </form>
        <div className=''> 
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Unit price</TableCell>
                <TableCell align="right">Number of</TableCell>
                <TableCell align="right">Into money</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listCarts.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className='!flex'>
                    <img className='w-20 h-20 mr-2' src={row.thumbnail} />
                    <div className='flex items-center justify-center'>{row.title}</div>
                  </TableCell>
                  <TableCell  align="right">${row.price}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">${row.quantity * row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>123</div>
        </TableContainer>
        </div>
      </div>
    </div>
  )
}
