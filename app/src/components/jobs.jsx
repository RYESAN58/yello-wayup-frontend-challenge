import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { transformVNodeArgs } from "vue";

const Jobs = () => {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get('https://62bc8d086b1401736cfcd8fb.mockapi.io/jobs')
    .then((response)=> {
      const result = response.data;
      setJobs(result)
      console.log(result)
    }).catch((err)=> {
      console.log(err.response)
    })
    return () => {
      
    }
  }, [])
  const TABLE_HEAD = ["Title", "Company", "Description", "Location",'Tags' ,""];

  const buttonClick = () => {
    alert("APPLIED!")
  }

  return(
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {TABLE_HEAD.map((head, index) => (
            <th key={index} style={{ backgroundColor: '#001770', color: 'white', padding: '10px', textAlign: 'left' }}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Jobs.map((job, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 ? '#f2f2f2' : 'white' }}>
            <td style={{ padding: '10px' }}>{job.title}</td>
            <td style={{ padding: '10px' }}>{job.company}</td>
            <td style={{ padding: '10px' }}>{job.description}</td>
            <td style={{ padding: '10px' }}>{job.location}</td>
            <td style={{ padding: '10px', color: 'blue', cursor: 'pointer' }}>
              {
              job.tags[0]? job.tags[0] : ""
              }
              {
              job.tags[1]? ", " + job.tags[1] : ""
              }
            </td>
            <td>
              <button style={{padding: '5px', backgroundColor:'#001770', border: "1px solid gray", color:'white'}} onClick={buttonClick}>Apply</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


export default Jobs;