import React from 'react'
import Tables from './Tables'
import { payroll } from '../../data/data'
import SideBar from '../../components/sidebar/SideBar'

const PayrollLog = () => {

    const columns = [
        {
            field: 'id', header: '#',
        },
        {
            field: 'payment_date', header: 'Payment Date',
        },
        {
            field: 'name', header: 'Employee Name',
        },
        {
            field: 'reg_hours', header: 'Registered Hours',
        },
        {
            field: 'vac_hours', header: 'Vacation Hours',
        },
        {
            field: 'sick_hours', header: 'Sick hours',
        },
        {
            field: 'holiday_hrs', header: 'Holiday hours',
        },
        {
            field: 'pen_hours', header: 'Pen Hours',
        },
        {
            field: 'o.t_hours', header: 'Overtime hours',
        },
        {
            field: 'gross_pay', header: 'Gross pay (₦)',
        },
        {
            field: 'net_pay', header: 'Net pay(₦)',
        },

    ]
  return (
   
	<div className='flex flex-row relative'>
	<div className='w-[100%]'>
		<SideBar title='Payroll' />

			
	</div>
	<div className='absolute left-[21rem] top-8 w-[80%]'>
	<div className='w-[100%] mt-16'>
			<Tables data={payroll} columns={columns} />
			</div>



	</div>
	</div>

  )
}

export default PayrollLog