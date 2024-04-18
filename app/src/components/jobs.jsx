import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card, Typography } from "@material-tailwind/react";

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
  const TABLE_HEAD = ["Title", "Company", "Description", "Location", ""];

  return(
    <Card>
      <table>
        <thead>
          <tr>
            {TABLE_HEAD.map((head, key) => (
              <th
                key={key}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Jobs.map(({ title, company, description,tags,location }, index) => {
            const isLast = index === Jobs.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue";
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal"
                  >
                    {title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal"
                  >
                    {company}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue"
                    className="font-normal"
                  >
                    {description}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    variant="small"
                    color="blue"
                    className="font-medium"
                  >
                    {location}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  )
}


export default Jobs;