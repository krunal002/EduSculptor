import "./entityDetails.css";
import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { format } from "date-fns";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { deleteStudent, fetchStudents } from "../../Features/Students/studentsSlice";
import { deleteTeacher, fetchTeachers } from "../../Features/Teachers/teachersSlice";

const EntityDetails = ({ entity, data }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const dateFormat = "dd MMM yyyy";
  const formattedDate = (currentDate) => format(currentDate, dateFormat);

  const handleEdit = () => {
    navigate(`/student-form`, {state: {entity, data}})
  }

  const handleDelete = () => {
    if(entity === "student"){
      dispatch(deleteStudent(data?._id))
    } else if(entity === "teacher"){
      dispatch(deleteTeacher(data?._id))
    }
  }

  const handleReload = () => {
    if(entity === "student"){
      dispatch(fetchStudents())
    } else if(entity === "teacher"){
      dispatch(fetchTeachers())
    }
  }

  return (
    <section className="entity-details">
      <div className="profile">
        <img 
          src="https://img.freepik.com/premium-vector/people-ribbon-logo-modern-leadership-logo-human-charity-logo_327835-2463.jpg" 
          alt="profile" 
          className='profile-pic-wrapper'
        />
        <div>
          <h2>{data?.name}</h2>
          {data?.class?<p className="profile-meta">
            Class: <strong>{data?.class}</strong> | Student ID:{" "}
            <strong>{data?.id}</strong>
          </p>
          :<p className="profile-meta">
            Subject: <strong>{data?.subject}</strong> | Teacher ID:{" "}
            <strong>{data?.id}</strong>
          </p>}
        </div>
      </div>

      <div className="functional-buttons">
        <Stack spacing={2} direction="row" sx={{m:2}}>
          <Button variant="contained" size="small" onClick={handleEdit}>Edit</Button>
          <Button variant="contained" size="small" onClick={handleDelete}>Delete</Button>
        </Stack>
      </div>

      <div className="basic-details">
        <h3>Basic Details</h3>
        <div className="basic-details-list">
          <div className="info-wrapper">
          Gender <strong>{data?.gender}</strong> 
          </div>
          <div className="info-wrapper">
          Date of Birth<strong>{data?.dob ? formattedDate(new Date(data.dob)) : "N/A"}</strong> 
          </div>
          <div className="info-wrapper">
          Religion<strong>{data?.religion}</strong> 
          </div>
          <div className="info-wrapper">
          Blood Group<strong>{data?.bloodgroup}</strong> 
          </div>
          <div className="info-wrapper">
          Address<strong>{data?.address}</strong> 
          </div>
          <div className="info-wrapper">
          Guardian<strong>{data?.guardianname}</strong> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntityDetails;
