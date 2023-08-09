import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import "./TaskMain.css"


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


    <div className='container mt-5'>
      <div className='row  mx-auto'>
        <div className='col-sm-4 border border-dark p-3 '>
          <form onSubmit={handlesubmit}>
            <h2>Add Section</h2>
            <div>
              <label for="input-text">Section Header</label>
              <input id="input-text" className='form-control form-group' value={data.header} name='header' type='text' onChange={handleChange} />
            </div>
            <div>
              <label for="input-textarea">Section Details</label>
              <textarea id="input-textarea" className='form-control' value={data.details} name='details' type='text' onChange={handleChange} />
            </div>
            <button className='mt-3 btn btn-block btn-primary' type='submit'>Add</button>
          </form>
        </div>

        <div className='col-sm-6 border border-dark p-3'>

          {/* <Accordion>
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
          </Accordion> */}

          <div class="accordion" id="accordionExample">
            <div class="card shadow">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Section 1
                  </button>
                </h2>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the class.
                </div>
              </div>
            </div>
          </div>


          {newData.map((item) => {
            return (


              <div class="accordion" id="accordionExample">
              <div class="card shadow">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                    {item.header}
                    </button>
                  </h2>
                </div>
  
                <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                  {item.details}
                  </div>
                </div>
              </div>
            </div>

              // <Accordion sx={{ marginTop: "15px" }}>
              //   <AccordionSummary
              //     expandIcon={<ExpandMoreIcon />}
              //     aria-controls="panel1a-content"
              //     id="panel1a-header"
              //   >
              //     <Typography>{item.header}</Typography>
              //   </AccordionSummary>
              //   <AccordionDetails>
              //     <Typography>
              //       {item.details}
              //     </Typography>
              //   </AccordionDetails>
              // </Accordion>
            )
          })}

        </div>
      </div>
    </div>











  )
}

export default MainFile