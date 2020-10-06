import React, { useState, useEffect } from 'react';
import LeaveForm from './LeaveForm';
import LeaveList from './LeaveList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getLeaves,
  addLeave,
  deleteLeave,
  updateLeave,
} from '../../actions/leave';
import { getEmployees } from '../../actions/employee';
import Spinner from '../layout/Spinner';

const initialValues = {
  employee: '',
  leave: '',
  start_date: '',
  end_date: '',
  description: '',
};

function Leave({
  leaves: { loading, leaves },
  employees,
  deleteLeave,
  getEmployees,
  addLeave,
  updateLeave,
  getLeaves,
}) {
  const [values, setValues] = useState(initialValues);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    setValues({
      ...values,
      _id: e._id,
      employee: e.employee._id,
      leave: e.leave,
      start_date: e.start_date,
      end_date: e.end_date,
      description: e.description,
    });
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? updateLeave(values) : addLeave(values);
    console.log(values);
  };

  useEffect(() => {
    getEmployees();
    getLeaves();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className='row pt-4'>
      <div className='col-md-4'>
        <LeaveForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          employees={employees}
        />
      </div>
      <div className='col-md-8'>
        <LeaveList
          handleUpdate={handleUpdate}
          deleteLeave={deleteLeave}
          leaves={leaves}
        />
      </div>
    </div>
  );
}

Leave.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  getLeaves: PropTypes.func.isRequired,
  addLeave: PropTypes.func.isRequired,
  deleteLeave: PropTypes.func.isRequired,
  updateLeave: PropTypes.func.isRequired,
  employees: PropTypes.object.isRequired,
  leaves: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  leaves: state.leave,
  employees: state.employee.employees,
});

export default connect(mapStateToProps, {
  getEmployees,
  getLeaves,
  addLeave,
  updateLeave,
  deleteLeave,
})(Leave);
