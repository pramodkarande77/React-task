import React, { useState } from 'react'





function Main() {

  const [data, setData] = useState("")

  const handleChange = (e) => {

    setData(e.target.value)
    console.log(e.target.value);

  }

  return (

    <>

      <div className='container mt-5 ' >
        <div class="card shadow ">
          <div class="card-body">
            <div className='col-sm-8 mx-auto'>
              <div className='row '>
                <div className="col-sm-6 form-group ">
                  <label for="input-text">First Name</label>
                  <input type="text" class="form-control" id="input-text" />
                </div>
                <div className="col-sm-6 form-group">
                  <label for="inp-text">Last Name</label>
                  <input type="text" class="form-control" id="inp-text" />
                </div>
              </div>
            </div>
            <div className='col-sm-8 mx-auto'>
              <div className='row'>
                <div className='col-sm-6'>
                  <label for="input-text1">How should we contact you?</label>
                  <select name="" id="input-text1" class="form-control" onChange={handleChange}>
                    <option >Choose Option</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                  </select>
                </div>
                {data === 'phone' ? <div className='col-sm-6'>

                  <label for="inp-text1">{data === "phone" ? "Phone Number" : "Email Adress"}</label>
                  <input name='phone' type='text' class="form-control" id="inp-text1"></input>
                </div>
                  : data === 'email' ? <div className='col-sm-6'>
                    <label for="inp-text1">{"Email Adress"}</label>
                    <input name='phone' type='text' class="form-control" id="inp-text1"></input>
                  </div> : ""}

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Main 






