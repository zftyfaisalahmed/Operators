import React from 'react'
import Calc from './../BasicOperators/EveryThing';

const Logical = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-12 col-md-12 offset-lg-3 offset-xl-3 col-lg-6 col-lg-6'>
                <div className='my-3'>
                    <label for="desc" className=''>Enter input a :</label> 
                    <input type="number" className="form-control" id="val1" required />
                </div>
                <div className='my-3'>
                    <label for="desc">Enter input b :</label> 
                    <input type="number" className="form-control" id="val2" required />
                </div>
                <div>
                    <select id="opt" className='my-3'>
                        <option value="&&">Logical and</option>
                        <option value="||">Logical or</option>
                        <option value="!=">Logical not Equal</option>
                    </select>
                </div>
                <div>
                    <button type="submit" name="submit" className='btn btn-success my-3' onClick={Calc}>Submit</button>
                </div>
                <div>
                    <label for="desc">Answer:</label> 
                    <input type="text" className="form-control" id="ans" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logical