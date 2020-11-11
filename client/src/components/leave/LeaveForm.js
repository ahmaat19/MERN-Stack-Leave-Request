import React from "react";

function LeaveForm({
  handleChange,
  handleSubmit,
  values,
  employees,
  employee_id,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='row gy-2'>
        <h3 className='text-center form-title mb-4'>Leave Requests</h3>
        <hr className='mt-0' />

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='identification w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <select
            name='employee'
            onChange={handleChange}
            value={values.employee}
            className='form-control py-2'
            required
          >
            <option value='' disabled>
              Employee ID...
            </option>
            {employees &&
              employees.map(
                (employee) =>
                  employee.active === "Yes" &&
                  employee._id === employee_id && (
                    <option key={employee._id} value={employee._id}>
                      {employee.emp_id}
                    </option>
                  )
              )}
          </select>
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='identification w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <select className='form-control py-2' disabled>
            <option value='' disabled>
              Employee Name...
            </option>
            {employees &&
              employees.map(
                (employee) =>
                  employee.active === "Yes" &&
                  employee._id === employee_id && (
                    <option key={employee._id} value={employee._id}>
                      {employee.name}
                    </option>
                  )
              )}
          </select>
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='office-building w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <select
            name='leave'
            onChange={handleChange}
            value={values.leave}
            className='form-control py-2'
          >
            <option value='' disabled>
              Leave Type...
            </option>
            <option value='Holyday'>Holyday</option>
            <option value='Paid'>Paid</option>
            <option value='Maternity'>Maternity</option>
            <option value='Annual'>Annual</option>
            <option value='Sick'>Sick</option>
          </select>
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='calendar w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <input
            name='start_date'
            onChange={handleChange}
            type='date'
            value={values.start_date}
            className='form-control py-2'
            placeholder='Enter start date'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='calendar w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <input
            name='end_date'
            onChange={handleChange}
            type='date'
            value={values.end_date}
            className='form-control py-2'
            placeholder='Enter end date'
          />
        </div>

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='dots-circle-horizontal w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <textarea
            rows='5'
            cols='30'
            name='description'
            onChange={handleChange}
            type='date'
            value={values.description}
            className='form-control py-2'
            placeholder='Enter description'
          />
        </div>

        <div className='input-group mx-auto d-block text-right mt-2'>
          <button
            type='submit'
            className='btn-submit btn btn-primary shadow p-2 px-4'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default LeaveForm;
