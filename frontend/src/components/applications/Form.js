import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createApplication, updateApplication } from '../features/applicationSlice';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ApplicationForm( {application: initialApplication }) {
  const dispatch = useDispatch();


  
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const [application, setApplication] = useState(initialApplication || {
    ID: '',
    Applicant_Name: '',
    Gender: '',
    District: '',
    State: '',
    Pincode: '',
    Ownership: '',
    GovtID_Type: '',
    ID_Number: '',
    Category: '',
    Load_Applied: '',
    Date_of_Application: null,
    Date_of_Approval: null,
    Modified_Date: null,
    Status: '',
    Reviewer_ID: '',
    Reviewer_Name: '',
    Reviewer_Comments: '',
  });
  
  const [isDisabled, setIsDisabled] = useState(!!initialApplication);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors(null);
      }, 5000); // clears the error after 5 seconds
  
      return () => clearTimeout(timer);
    }
  }, [errors]);
  //Use Effect to set the initial application
  useEffect(() => {

    if (initialApplication) {
      setApplication(initialApplication);
    }
  }, [initialApplication]);

  //Validate the form
  const validateForm = (application) => {
    const errors = {};
    if (application.Load_Applied > 200) {
      setErrors('Load Applied should be less than 200');
      return false
    }
    if (application.Status === 'Approved' && application.Date_of_Approval === date) {
      setErrors('Date of Approval should be filled for Approved Status');
      return false
    }
    if (application.Status === 'Approved' && application.Reviewer_ID === '') {
      setErrors('Reviewer ID should be filled for Approved Status');
      return false
    }
    if (application.Status === 'Approved' && application.Reviewer_Name === '') {
      setErrors('Reviewer Name should be filled for Approved Status');
      return false
    }
    if (application.Status === 'Approved' && application.Reviewer_Comments === '') {
      setErrors('Reviewer Comments should be filled for Approved Status');
      return false
    }
    return true
  }

  //Handle Submit
  const handleSubmit =  async (e) => {
    e.preventDefault();
    if(validateForm(application)){ 
    if (initialApplication) {
    
      dispatch(updateApplication(application));
    } else {
      dispatch(createApplication(application));
    }
  
    
      setApplication({
        ID: '',
        Applicant_Name: '',
        Gender: '',
        District: '',
        State: '',
        Pincode: '',
        Ownership: '',
        GovtID_Type: '',
        ID_Number: '',
        Category: '',
        Load_Applied: '',
        Date_of_Application: null,
        Date_of_Approval: null,
        Modified_Date: null,
        Status: '',
        Reviewer_ID: '',
        Reviewer_Name: '',
        Reviewer_Comments: '',
      }); 
      setIsDisabled(false)
    }
  
    else{
      setApplication(initialApplication || {
        ID: '',
        Applicant_Name: '',
        Gender: '',
        Direction: '',
        District: '',
        State: '',
        Pincode: '',
        Ownership: '',
        GovtID_Type: '',
        ID_Number: '',
        Category: '',
        Load_Applied: '',
        Date_of_Application: null,
        Date_of_Approval: null,
        Modified_Date: null,
        Status: '',
        Reviewer_ID: '',
        Reviewer_Name: '',
        Reviewer_Comments: '',
      })
    }

  }
//Return the form
  return (
<div className="card card-body mt-4 mb-4">
  <h2>New/Edit Application</h2>
  <form onSubmit={handleSubmit}>
  <div className="form-group">
      <label>ID</label>
      <input
        className={`form-control `}
        type="number" 
        name="ID"
        onChange={handleChange}
        value={application.ID}
        required
      />
    </div>

    <div className="form-group">
      <label>Applicant Name</label>
      <input
        className={`form-control `}
        type="text" 
        name="Applicant_Name"
        onChange={handleChange}
        value={application.Applicant_Name}
        required
      />
    </div>
    <div className="form-group">
      <label>Gender</label>
      <select
        className="form-control"
        name="Gender"
        value={application.Gender}
        onChange={handleChange}
        required
      >
        <option value="">Select...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="form-group">
      <label>District</label>
      <input
        className="form-control"
        type="text"
        name="District"
        value={application.District}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>State</label>
      <input
        className="form-control"
        type="text"
        name="State"
        value={application.State}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Pincode</label>
      <input
        className="form-control"
        type="number"
        name="Pincode"
        value={application.Pincode}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Ownership</label>
      <select
        className="form-control"
        name="Ownership"
        value={application.Ownership}
        onChange={handleChange}
        required
      >
        
        <option value="">Select...</option>
        <option value="Joint">Joint</option>
        <option value="Individual">Individual</option>
      </select>
    </div>

    <div className="form-group">
      <label>GovtID_Type</label>
      <select
        className="form-control"
        name="GovtID_Type"
        value={application.GovtID_Type}
        onChange={handleChange}
        disabled={isDisabled}
        required
      >
        <option value="">Select...</option>
        <option value="ADHAAR">ADHAAR</option>
        <option value="PAN">PAN</option>
        <option value="PASSPORT">PASSPORT</option>
        <option value="VOTER_ID">VOTER_ID</option>
      </select>
    </div>

    <div className="form-group">
      <label>ID_Number</label>
      <input
        className="form-control"
        type="number"
        name="ID_Number"
        value={application.ID_Number}
        onChange={handleChange}
        disabled={isDisabled}
        required
      />
    </div>

    <div className="form-group">
      <label>Category</label>
      <select
        className="form-control"
        name="Category"
        value={application.Category}
        onChange={handleChange}
        required
      >
        <option value="">Select...</option>
        <option value="Commercial">Commercial</option>
        <option value="Residential">Residential</option>
      </select>
    </div>

    <div className="form-group">
      <label>Load_Applied (in KV)</label>
      <input
        className="form-control"
        type="number"
        name="Load_Applied"
        value={application.Load_Applied}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Date_of_Application</label>
      <input
        className="form-control"
        type="date"
        name="Date_of_Application"
        value={application.Date_of_Application}
        onChange={handleChange}
        disabled={isDisabled}
        required
      />
    </div>

    <div className="form-group">
      <label>Date_of_Approval</label>
      <input
        className="form-control"
        type="date"
        name="Date_of_Approval"
        value={application.Date_of_Approval}
        onChange={handleChange}
        required={application.Status === 'Approved'}
      />
    </div>

    <div className="form-group">
      <label>Modified_Date</label>
      <input
        className="form-control"
        type="date"
        name="Modified_Date"
        value={application.Modified_Date}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Status</label>
      <select
        className="form-control"
        name="Status"
        value={application.Status}
        onChange={handleChange}
        required
      >
        <option value="">Select...</option>
        <option value="Approved">Approved</option>
        <option value="Pending">Pending</option>
        <option value="Connection Released">Connection Released</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>

    <div className="form-group">
      <label>Reviewer_ID</label>
      <input
        className="form-control"
        type="number"
        name="Reviewer_ID"
        value={application.Reviewer_ID}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Reviewer_Name</label>
      <input
        className="form-control"
        type="text"
        name="Reviewer_Name"
        value={application.Reviewer_Name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Reviewer_Comments</label>
      <textarea
        className="form-control"
        name="Reviewer_Comments"
        value={application.Reviewer_Comments}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </div>
    {/*Display the errors*/}
    {errors && <div className="alert alert-danger">{errors}</div>}
  </form>
</div>

  );
}
