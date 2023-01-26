/* eslint-disable */
import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import axios from 'axios';

function sign_in() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const[form,setForm] =useState({
        login:'vistal-artur',
        password:'salomon-nienaleje'
    })
    const onChange = (e) => {
        setForm((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
      }

    const onSubmit=(e)=>{
        e.preventDefault()
        axios.post('../api/auth/register',form).then(response=>{console.log(response)}).catch(error=>console.log(error))
    }
  return (
    <div className='flex flex-col items-center py-20'>
       
        <form onSubmit={onSubmit} className='flex flex-col items-center gap-5'>
        <AccountCircleIcon color='primary' fontSize='large'/>
        <TextField id="login" name='login' label="Nazwa" variant="outlined" onChange={onChange} required />     
        <FormControl sx={{ m: 1, width: '25ch' }} required variant="outlined">
          <InputLabel htmlFor="password">Hasło</InputLabel>
          <OutlinedInput            
            id="password"
            onChange={onChange}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>   
        {/* <Button onClick={onSubmit} className='!bg-red-700' variant="contained">Zaloguj</Button> */}
        <Button onClick={onSubmit} className='!bg-red-700' variant="contained">Zarejestruj</Button>
            
        </form>
    </div>
  )
}

export default sign_in