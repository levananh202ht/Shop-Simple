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
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { removeFromCart } from '../redux/feature/cartSlice';
import { AiFillDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';

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
  const dispath = useDispatch();
  const listCarts = useSelector((state) => state.cartSlice.carts);
  const total = listCarts.reduce((total,product) => total + product.price * product.quantity,0)
  
  const [fromData,setFromData] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !fromData.name || !fromData.email || !fromData.phone || !fromData.address){
        console.log("qưe");
        return;
    }
    
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
      <h1 className='mb-8 text-2xl'>Checkout</h1>
      <form  onSubmit={handleSubmit}>
        <div className='flex justify-between w-72'>
            <div className=''>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div className=''>
                  <TextField
                    label="name"
                    id="outlined-size-small"
                    onChange={handleChange}
                    name="name"
                    value={fromData.name}
                  />
                  {fromData && !fromData.name && (
                    <span className="ml-5 text-red-500">* Image is required</span>
                  )}
                </div>
                <div>
                  <TextField
                    label="email"
                    id="outlined-size-small"
                    onChange={handleChange}
                    name="email"
                    value={fromData.email}
                  />
                </div>
                <div>
                  <TextField
                    label="phone"
                    id="outlined-size-small"
                    name="phone"
                    onChange={handleChange}
                    value={fromData.phone}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-multiline-flexible"
                    label="address"
                    name="address"
                    value={fromData.address}
                    onChange={handleChange}
                    multiline
                    maxRows={4}
                  />
                </div>
              </Box>
            </div>
          <div className=''> 
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Number of</TableCell>
                  <TableCell align="right">Total Price</TableCell>
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
                    <TableCell  align="right">
                    {
                      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.price)
                    }</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">
                    {
                      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.quantity * row.price)
                    }
                    </TableCell>
                    <TableCell align="right">
                      <AiFillDelete onClick={() => dispath(removeFromCart(row.id))} className="text-xl text-red-600 cursor-pointer" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className='p-5 mt-6 border border-t-slate-300'>
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-2xl'>Total Price</h3>
                <p>
                    {
                      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)
                    }
                </p>
              </div>
              <Button type="submit" className='w-full' variant="outlined">Pay</Button>
            </div>
          </TableContainer>
          </div>
        </div>
      </form>
    </div>
  )
}
