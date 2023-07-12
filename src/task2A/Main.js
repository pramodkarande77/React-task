import React, { useState } from 'react';




function Main() {

  const [data, setData] = useState("")

  const handleChange = (e) => {

    setData(e.target.value)
    console.log(e.target.value);

  }

  return (

    <>
      <div className='container col-5'
        style={{
          marginTop: "100px", paddingBottom: "50px", border: "1px solid #ccc"
          , background: "lightblue", borderRadius: "10px"
        }}>

        <form >
          <div className='d-flex' >
            <div className='inputDiv'>

              <label style={{fontSize:"20px",fontWeight:"bold",margin:"5px 0px 0px 20px"}}>First Name</label>
              <input name='First Name' type='text'
                style={{ width: "250", padding: "5px 5px 5px 2px",margin:"5px 0px 5px 20px", background: "lightwhite", borderRadius: "10px" }}></input>

            </div>
            <div className='inputDiv'>

              <label style={{fontSize:"20px",fontWeight:"bold",margin:"5px 0px 0px 20px"}}>Last Name</label>
              <input name='Last Name' type='text'
                style={{ width: "250", padding: "5px 5px 5px 2px",margin:"5px 0 5px 25px ", background: "lightwhite", borderRadius: "10px" }} ></input>

            </div>
          </div>
          <div className='d-flex' style={{ padding: "0 0 0 20px" }}>
            <div style={{ width: "223px" }}>

              <label style={{fontWeight:"bold"}}>How should we contact you?</label>

              <select onChange={handleChange}
                style={{ padding: "7px 30px 7px 35px", background: "lightwhite", borderRadius: "10px" }} >
                <option style={{fontWeight:"bold"}}>Choose Option</option>
                <option value='phone' >Phone</option>
                <option value='email' >Email</option>
              </select>


            </div>

            <div style={{ width: "250px", marginLeft: "60px", display: data ? "" : "none" }}>

              <label >{data === "phone" ? "Phone Number" : "Email Adress"}</label>
              <input name='phone' type='text' style={{ width: "250", padding: "5px 5px 5px 2px", background: "lightwhite", borderRadius: "10px" }}></input>

            </div>
          </div>

        </form>

      </div>
    </>
  )
}

export default Main 