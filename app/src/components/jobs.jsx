import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import { Card, Typography } from "@material-tailwind/react";

const Jobs = () => {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get('https://62bc8d086b1401736cfcd8fb.mockapi.io/jobs')
    .then((response)=> {
      const result = response.data;
      setJobs(result)
    }).catch((err)=> {
      console.log(err.response)
    })
    return () => {
      
    }
  }, [])
  return(
    <div>
      {
        Jobs.map((job,key)=>{
          return(
            <div key={key}>
              {job.company}
            </div>
          )
        })
      }
    </div>
  )
}


export default Jobs;