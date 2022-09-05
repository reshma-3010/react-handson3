import React,{useState} from 'react';
import './Form.css';

function Form(){
    const [details,setDetails] =useState({
        name:"",
        department:"",
        rating:"",
    })
    const [records,setRecords]=useState([]);
    const [submit,setSubmit]=useState(false);
    const handleInput =(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setDetails({...details,[name]:[value]});
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setRecords([...records,{...details,id:records.length}]);
        setSubmit(true);
        setDetails({name:"",department:"",rating:""})
    }
    return(
        <>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <div>
            {submit?null:<div>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text"
                    onChange={handleInput}
                    name="name"
                    value={details.name}
                    autoComplete="off"
                    required></input><br></br>

                    <label>Department:</label>
                    <input type="text"
                    onChange={handleInput}
                    name="department"
                    value={details.department}
                    autoComplete="off"
                    required></input><br></br>



                   <label>Rating:</label>
                    <input type="number"
                    autoComplete='off'
                    onChange={handleInput}
                    name="rating"
                    value={details.rating}
                    required></input><br></br>

                  <button type="submit">Submit</button>

                </form>
                </div>}

                {(submit? <><div className='box'>
                    {records.map((curele)=>(
                        <div className='sbox' key={curele.id}>
                            Name:{curele.name} ||Department:{curele.department} || Rating:{curele.rating}
                        </div>
                    ))}
                    </div>
                    <button style={{marginLeft:"650px"}} onClick ={()=>{setSubmit(!submit)}}>Back Home</button></>:null)}
        </div>
        </>
    )
}
export default Form;

