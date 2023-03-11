import React from 'react'
import Tables from './Tables'
import { progressreport } from '../../data/data'
import SideBar from '../../components/sidebar/SideBar'

const ProgressReport = () => {

    const columns = [
        {
            field: 'id', header: '#',
        },
        {
            field: 'date_assigned', header: 'Date Assigned',
        },
        {
            field: 'order_id', header: 'Order Id',
        },
        {
            field: 'task', header: 'Task',
        },
        {
            field: 'due_date', header: 'Date Due',
        },
        {
            field: 'comment', header: 'Comment on Progress',
        },


    ]
    return (

        // <div className='flex flex-col justify-center align-items w-[100%] grow h-[100%]'>

			
        // </div>
		<div className='flex flex-row relative'>
		<div className='w-[100%] '>
			<SideBar title='Progress Report' />

				
		</div>
		<div className='absolute left-[21rem] top-8 w-[80%]'>
		<div className='w-[100%] mt-16'>
                <Tables data={progressreport} columns={columns} />
				</div>



		</div>
		</div>
    )
}

export default ProgressReport