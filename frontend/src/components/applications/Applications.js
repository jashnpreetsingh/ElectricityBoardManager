import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApplications } from '../features/applicationSlice';

export default function Applications( {onEdit}) {
  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);
  const dispatch = useDispatch();
  //Getting applications from Redux store
  const applications = useSelector((state) => state.applications.entities);
  const loading = useSelector((state) => state.applications.loading);
  //Filtering applications by ID and date range
  const [currentPage, setCurrentPage] = useState(1);
  const [filterId, setFilterId] = useState('');
  const [filterDateRange, setFilterDateRange] = useState({ start: '', end: '' });
  
  //Pagination
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  //Filtering applications by ID and date range
  const filteredApplications = applications.filter(application => {
    const dateOfApplication = new Date(application.Date_of_Application);
    const startDate = new Date(filterDateRange.start);
    const endDate = new Date(filterDateRange.end);

    return (filterId === '' || Number(application.ID) === Number(filterId)) &&
      (filterDateRange.start === '' || dateOfApplication >= startDate) &&
      (filterDateRange.end === '' || dateOfApplication <= endDate);
  });
  const currentItems = filteredApplications.slice(indexOfFirstItem, indexOfLastItem);
  //Handling edit button click
  const handleEditClick = (application) => {
    onEdit(application);
  };



  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);
  return (
    //Form to filter applications by ID and date range
    <div>
      <h3>Applications</h3>

      <div className="form-group">
        <input 
          type="number" 
          className="form-control" 
          value={filterId} 
          onChange={e => setFilterId(e.target.value)} 
          placeholder="Filter by ID" 
        />
      </div>
      <div className="form-group">
        <label>Select Date Range
        <input 
          type="date" 
          className="form-control" 
          value={filterDateRange.start} 
          onChange={e => setFilterDateRange({ ...filterDateRange, start: e.target.value })} 
          placeholder="Start date" 
        />

        <input 
          type="date" 
          className="form-control" 
          value={filterDateRange.end} 
          onChange={e => setFilterDateRange({ ...filterDateRange, end: e.target.value })} 
          placeholder="End date" 
        />
        </label>
      </div>
      {loading === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <div>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Applicant Name</th>
              <th scope="col">Gender</th>
              <th scope="col">District</th>
              <th scope="col">State</th>
              <th scope="col">Pincode</th>
              <th scope="col">Ownership</th>
              <th scope="col">Govt ID Type</th>
              <th scope="col">ID Number</th>
              <th scope="col">Category</th>
              <th scope="col">Load Applied</th>
              <th scope="col">Date of Application</th>
              <th scope="col">Date of Approval</th>
              <th scope="col">Modified Date</th>
              <th scope="col">Status</th>
              <th scope="col">Reviewer ID</th>
              <th scope="col">Reviewer Name</th>
              <th scope="col">Reviewer Comments</th>
              <th scope="col">View/Edit</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((application) => (
              <tr key={application.ID}>
                <td>{application.ID}</td>
                <td>{application.Applicant_Name}</td>
                <td>{application.Gender}</td>
                <td>{application.District}</td>
                <td>{application.State}</td>
                <td>{application.Pincode}</td>
                <td>{application.Ownership}</td>
                <td>{application.GovtID_Type}</td>
                <td>{application.ID_Number}</td>
                <td>{application.Category}</td>
                <td>{application.Load_Applied}</td>
                <td>{application.Date_of_Application}</td>
                <td>{application.Date_of_Approval}</td>
                <td>{application.Modified_Date}</td>
                <td>{application.Status}</td>
                <td>{application.Reviewer_ID}</td>
                <td>{application.Reviewer_Name}</td>
                <td>{application.Reviewer_Comments}</td>
                <td>
                <button onClick={() => handleEditClick(application)} className="btn btn-primary">
                   View/Edit
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-dark mt-2 mr-2" onClick={() => setCurrentPage((page) => Math.max(page - 1, 1)) }>
          Previous
        </button>
        <button className="btn btn-dark mt-2" onClick={() => setCurrentPage((page) => Math.min(page + 1, Math.ceil(applications.length / itemsPerPage)))}>
          Next
        </button>
      </div>
        </div>
      )}
    </div>
  );
}
