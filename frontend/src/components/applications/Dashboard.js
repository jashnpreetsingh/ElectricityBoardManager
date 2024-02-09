import React from 'react'
import Form from './Form'
import Applications from './Applications'
import BarChart from './ApplicationTracker'

function Dashboard() {
  const [selectedApplication, setSelectedApplication] = React.useState(null);

  const handleEdit = (application) => {
    setSelectedApplication(application);
  };

  return (
    <>
    <div className='container'>
      <Form application={selectedApplication} />
      </div>
      <div className='container'>
        <Applications onEdit={handleEdit} />
      </div>
    </>
  )
}

export default Dashboard
