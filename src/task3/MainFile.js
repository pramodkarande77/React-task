import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./TaskMain.css"


function MainFile() {

  const obj = {
    header: "",
    details: ""
  }

  const [data, setData] = useState(obj)

  const [newData, setNewData] = useState([])

  const handleChange = (e) => {

    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {

    e.preventDefault();
    setNewData([...newData, data])
    setData(obj)
  }

  return (
    <div className='DivContain'>
      <div className='midDiv'>


        <form onSubmit={handlesubmit} className='Foemdiv'>
          <h2 style={{textAlign:"center"}}>Add Section</h2>
          <div className='IntDiv'>
            <label>Section Header</label>
            <input value={data.header} name='header' type='text' onChange={handleChange} />
          </div>
          <div className='IntDiv'>
            <label>Section Details</label>
            <textarea value={data.details} name='details' type='text' onChange={handleChange} />
          </div >
          <button type='submit'>Add</button>
        </form>

      </div>
      <div className='secDiv'>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Section 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {newData.map((item) => {
          return (
            <Accordion sx={{marginTop:"15px"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.header}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}

      </div>

    </div>
  )
}

export default MainFile