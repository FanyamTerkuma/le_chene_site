import React from 'react'
import { ordered } from '../../data/data'

const Tables = ({ data, columns }) => {
    const getCaps = (str) => {
        return str.toUpperCase()
    }
    
  return (
    
        
         <div className='w-{100%]  h-[100%] mr-4 max-w-md w-[100%]'>
             <table className='w-[100%] mt-4 text-center border font-sans table-auto maxsm:block'>
                <thead className='sm:none'>
                    <tr className='bg-[#26867B] text-white h-[3.5rem] sm:hidden '>
                        {columns?.map((head)=> (
                            <th className='border w-fit  '>{getCaps(head.header)}</th>
                        ))}
                    </tr>
                    
                </thead>
                <tbody className='sm:block sm:w-[100%]'>
                {data?.map((row)=>(
                    <tr className='border bg-gray even:bg-gray-100 h-[.5rem] text-wrap  md:gap-6'>
                        
                       {columns?.map((col)=> (
                        <td className='border sm:block sm:w-[100%]'>{row[col.field]}</td>
                       ))}
                    </tr>
                ))}
                </tbody>
         </table>
         </div>
       
        
  )
}

export default Tables