import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Languagechart = () => {

    const data = [
        {
            name: 'Turkish',
            skill: 55,

        },
        {
            name: 'English',
            skill: 100,
        },
        {
            name: 'Farsi',
            skill: 100,
        },
        {
            name: 'French',
            skill: 20,
        },
        {
            name: 'Azeri',
            skill: 100,
        }
    ];
  return(
      <>
          <ResponsiveContainer width="100%" height="100%"  >


          <AreaChart
              className='cursor'
              width={500}
              height={400}
              data={data}
              margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
              }}
          >
              <CartesianGrid strokeDasharray="3 3"  />
              <XAxis dataKey="name" className='title ' tick={{stroke: '#bababa'}}/>
              <YAxis   />
              <Tooltip />
              <Area type="monotone" dataKey="skill" stackId="1" stroke="rgb(94 234 212)" fill="rgb(45 212 191 / 10%)" />

          </AreaChart>
          </ResponsiveContainer>


      </>
  )
}
export default Languagechart;