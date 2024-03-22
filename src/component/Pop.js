
import React, { useState } from 'react'
import { Dialog, DialogContent } from '@material-ui/core';
import { DialogTitle } from '@mui/material';


function Pop() {
  const[OpenPopup,setOpenPopup,Children]=useState(false);
  return (
    <div>
          <Dialog>
      <DialogTitle open={OpenPopup}>
        <div>Title goes here</div>
        
      </DialogTitle>
      <DialogContent>
        {Children}

      </DialogContent>
    </Dialog>
      
    </div>
  )
}

export default Pop

