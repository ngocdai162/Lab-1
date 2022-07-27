import logo from './logo.svg';
import './App.css';
import { useState, useRef,useReducer} from 'react';
   
// ------------------useState-----------------
/*function App() {
  const [jobs,setJobs] = useState([]);   const [job,setJob] = useState();
   const handleAdd = () => {
     setJobs(jobs => {
        const newJobs = [...jobs,job]
       return newJobs;
     })
     setJob('');
   }
  return (
     <div className='App'>
        <div className='main'>
         <div className='main__input'>
           <input value={job} onChange={e => setJob(e.target.value)} placeholder='New job'/>
           <button onClick={handleAdd}>Add</button>
         </div>
         <div className='main__list'>
           <ul>
            {
             jobs.map((job,index)=> 
             <li>
              <input type='checkbox' onClick={
                  e => e.target.parentElement.querySelector("p").classList.toggle("done")
                  }/>
                  <p key={index}>{job}</p>
             </li>
             )
            }
           </ul>
         </div>
        </div>
     </div>
   )
 } */


//----------------------useReducer-----------------
function App() {
  
  const [job,setJob] = useState();
  const initialvalue = [];
  const ADD_ACTION = "add";
  const reducer = (state,action) => {
    switch(action) {
      case ADD_ACTION : {
        return [...state,job];
      }
    }
  }
  const handleAdd = () => {
    dispatch(ADD_ACTION);
  }
  const [jobs,dispatch] = useReducer(reducer,initialvalue)
  return (
    <div className='App'>
       <div className='main'>
        <div className='main__input'>
          <input  value={job} onChange={e => setJob(e.target.value)} placeholder='New job'/>
          <button onClick={handleAdd}>Add</button>
        </div>
        <div className='main__list'>
          <ul>
          {
            jobs.map((job,index)=> 
            <li>
              <input type='checkbox' onClick={
                (e) => {
                  console.log(e.target.parentElement.querySelector("p"))
                  e.target.parentElement.querySelector("p").classList.toggle("done");
                }
              }/>
              <p key={index}>{job}</p>
            </li>
            )
          }
          </ul>
        </div>
       </div>
    </div>
  )
}

export default App;
