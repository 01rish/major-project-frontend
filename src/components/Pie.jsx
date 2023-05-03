import React from 'react'
import Chart from 'react-apexcharts'

function Pie() {
  return (
    <>
        <div>
            <Chart 
                type="donut"
                width={400}
                height={350}
                // series={[45,67,89,54,34,3]}
                options ={
                    {
                        // labels:['USA','China','Russia','India','South Korea','Netherland']
                }
                }
            />
        </div>
    </>
  )
}

export default Pie