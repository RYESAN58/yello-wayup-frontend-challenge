import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import '../App.css';


const Jobs = () => {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get('https://62bc8d086b1401736cfcd8fb.mockapi.io/jobs')
    .then((response)=> {
      const result = response.data;
      setJobs(result)
      console.log(result)
      console.log(result)
    }).catch((err)=> {
      console.log(err.response)
    })
    return () => {
      
    }
  }, [])
  const TABLE_HEAD = ["Title", "Company", "Description", "Location",'Tags' ,""];

  const buttonClick = (jobid) => {
    alert("APPLIED!")
    setJobs(Jobs.filter(job => job.id !== jobid));
  }

  return(
    <table  className = "tableInfo">
      <thead>
        <tr>
          {TABLE_HEAD.map((head, index) => (
            <th key={index} className = "headStyle">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Jobs.map((job, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 ? '#f2f2f2' : 'white' }}>
            <td className="rowData">{job.title}</td>
            <td className="rowData">{job.company}</td>
            <td className="rowData">{job.description}</td>
            <td  className="rowData">{job.location}</td>
            <td className="rowData">
              {
              job.tags[0]? job.tags[0] : ""
              }
              {
              job.tags[1]? ", " + job.tags[1] : ""
              }
            </td>
            <td>
              <button  className={"apply"} onClick={() => buttonClick(job.id)}>Apply</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


export default Jobs;