import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ReactPaginate from 'react-paginate'
import Moment from 'react-moment'
import moment from 'moment'
import { listLeave } from '../actions/leaveActions'

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch()
  const leaveList = useSelector((state) => state.leaveList)
  const { leaves, error, loading } = leaveList

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const onLeave =
    leaves &&
    leaves.filter(
      (leave) =>
        moment(leave.end_date).format('YYYY-MM-DD') >=
        moment(Date.now()).format('YYYY-MM-DD')
    )
  const currentItems =
    onLeave && onLeave.slice(indexOfFirstItem, indexOfLastItem)
  const totalItems = leaves && Math.ceil(leaves.length / itemsPerPage)

  useEffect(() => {
    dispatch(listLeave())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h3 className='text-center form-title my-2'>Current on Leave</h3>
      {currentItems && currentItems.length > 0 && (
        <div className='table-responsive'>
          <table className='table table-sm hover bordered striped caption-top'>
            <caption>
              {leaves && onLeave.length} employees were found on leave
            </caption>
            <thead>
              <tr>
                <th>Emp. Name</th>
                <th>Department</th>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentItems &&
                currentItems.map(
                  (leave) =>
                    moment(leave.end_date).format('YYYY-MM-DD') >=
                      moment(Date.now()).format('YYYY-MM-DD') && (
                      <tr key={leave._id}>
                        <td>{leave.employee && leave.employee.name}</td>
                        <td>
                          {leave.employee && leave.employee.department.name}
                        </td>
                        <td>{leave.leave}</td>
                        <td>
                          <Moment format='YYYY-MM-DD'>
                            {moment(leave.start_date)}
                          </Moment>
                        </td>
                        <td>
                          <Moment format='YYYY-MM-DD'>
                            {moment(leave.end_date)}
                          </Moment>
                        </td>
                        <td>{leave.description}</td>
                      </tr>
                    )
                )}
            </tbody>
          </table>

          {currentItems && !loading && currentItems.length === 0 && (
            <span className='text-danger d-flex justify-content-center'>
              No data found!
            </span>
          )}
          <div className='d-flex justify-content-center'>
            <ReactPaginate
              previousLabel='previous'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextLabel='next'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              pageClassName='page-item'
              pageLinkClassName='page-link'
              activeClassName='page-item active'
              activeLinkClassName={'page-link'}
              breakLabel={'...'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              pageCount={totalItems && totalItems}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={(e) => setCurrentPage(e.selected + 1)}
              containerClassName={'page pagination'}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default HomeScreen
