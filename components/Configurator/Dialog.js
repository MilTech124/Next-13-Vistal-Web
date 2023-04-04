import Modal from '@mui/material/Modal';
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
  };

  export default function BasicModal({children}) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
  
	return (
	  <div>
		<Button variant="contained" className='bg-slate-50/50 text-black mt-2' onClick={handleOpen}>Wybierz Kolorystykę</Button>
		<Modal
		  open={open}
		  onClose={handleClose}
		  aria-labelledby="modal-modal-title"
		  aria-describedby="modal-modal-description"
		>
		  <Box sx={style}>
			{children}
			<Button variant="contained" className='text-black mt-5' onClick={handleClose}>Zamknij</Button>
		  </Box>
		</Modal>
	  </div>
	);
  }