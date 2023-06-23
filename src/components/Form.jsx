import React from 'react'
import {useState} from 'react'
import './Form.css'

function Form() {
    const [inputarr,
        setInputarr] = useState([])

    const [inputdata,
        SetInputdata] = useState(
            {first_name: "",  last_name: "", date_of_birth: "", email:" ", mobile_number: " ", city: " ", pincode: " "})

    function changehandle(e) {

        SetInputdata({
            ...inputdata,
            [e.target.name]: e.target.value
        })

    }

    let { first_name, last_name, date_of_birth, email, mobile_number, city, pincode} = inputdata;

    function changhandle() {
            console.log("lengh", inputarr.length)
            setInputarr([
            ...inputarr, {
                 first_name, last_name, date_of_birth, email, mobile_number, city, pincode,
            }
        ])       
        console.log(inputdata, "data")

        SetInputdata( {first_name: "",  last_name: "", date_of_birth: "", email:" ", mobile_number: " ", city: " ", pincode: " "})

    }
    let delethandle =(i)=>{
        let newdataArr=[...inputarr]
        newdataArr.splice(i,1)
        setInputarr(newdataArr)
    }
 
    return (
        <div className="cantainer">
            <section className='section'>
            <form className='form'>
            <div className='card'>
            <label>Fast Name</label>           
            <input
                type="text"
                autoComplete='off'
                name='first_name'
                value={inputdata.first_name}
                onChange={changehandle}
                className='input-filde'
                placeholder="Fast Name"
                required
                />
            </div>
            <div className='card'>
            <label>Last Name</label>
            <input
                type="text"
                autoComplete='off'
                name='last_name'
                value={inputdata.last_name}
                onChange={changehandle}
                className='input-filde'
                placeholder="Last Name"
                />
            </div>
            <div className='card'>
            <label>Date Of Birth</label>   
            <input
                type="date"
                autoComplete='off'
                name='date_of_birth'
                value={inputdata.date_of_birth}
                onChange={changehandle}
                className='input-filde'
                placeholder="Date Of Birth"
                required
                pattern='Yes'/>
            </div>
            <div className='card'>
            <label>Email</label>
            <input
                type="email"
                autoComplete='off'
                name='email'
                value={inputdata.email}
                onChange={changehandle}
                className='input-filde'
                placeholder="Email"
                required
                />
                
            </div>
            <div className='card'>
            <label>Mobile Numner</label>
            <input
                type="text"
                autoComplete='off'
                name='mobile_number'
                value={inputdata.mobile_number}
                onChange={changehandle}
                className='input-filde'
                placeholder="Mobile Number"
                required
                maxLength={10}
                minLength={10}
                
                />
            </div>
            <div className='card'>
            <label>City</label>
            <input
                type="text"
                autoComplete='off'
                name='city'
                value={inputdata.city}
                onChange={changehandle}
                className='input-filde'
                placeholder='City'
                required
                />
            </div>
            <div className='card'>
            <lable>Pine Code</lable>
            <input
                type="text"
                autoComplete='off'
                name='pincode'
                value={inputdata.pincode}
                onChange={changehandle}
                className='input-filde'
                placeholder='Pine Code'
                required
             />
            </div>
            <div className='card'>
            <button onClick={changhandle}  className='btn'>Submit</button>
            </div>
            </form>
            </section>
          
            <section className='section'>
            <div className='card'>
            <table className='tbl' cellPadding={10}>
                <tbody >
                    <tr className='table-header'>
                        <td>Sr.No</td>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of birth</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                    {inputarr.length < 1 ? ( 

                      <tr className='data'>
                      <td colSpan={4}>NO Data Enter Yet !</td>
                      </tr>
                  
                    ): (
                  inputarr.map((info, ind) => {
                       
                        return (
                        <tr key={ind}>
                    <td>{ind + 1}</td>
                     <td>{info.first_name}</td>
                  <td>{info.last_name}</td>
            <td>{info.date_of_birth}</td>
            <td>{info.email}</td>
            <td>{info.mobile_number}</td>
            <td>{info.city}</td>
            <td>{info.pincode}</td>
            <td><button className='btn' onClick={()=>delethandle(ind)}>Delete</button></td>
        </tr>
    )
})
                        )}

                </tbody>
            </table>
            </div>
            </section>
        </div>
    );
}

export default Form;