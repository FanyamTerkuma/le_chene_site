import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TaskCalendar = ({ handleDateChange, date, getNotificationCount }) => {
	return (
		<div className='w-full p-1 flex justify-center '>
			<Calendar
				className='px-2 w-full rounded-lg shadow-custom-shadow'
				tileClassName='w-12 h-12 flex justify-center items-center '
				onChange={handleDateChange}
				value={date}
				tileContent={({ date, view }) =>
					view === 'month' ? (
						<div>
							{getNotificationCount(date) > 0 && (
								<div className='notification-dot bg-red-500 text-xs text-white rounded-full h-4 w-4 flex justify-center items-center'>
									{getNotificationCount(date)}
								</div>
							)}
						</div>
					) : (
						<></>
					)
				}
			/>
		</div>
	);
};

export default TaskCalendar;
