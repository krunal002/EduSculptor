import "./studentForm.css";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { addStudent, updateStudent } from "./studentsSlice";
import { addTeacher, updateTeacher } from "../Teachers/teachersSlice";

export default function StudentForm() {
  let { state } = useLocation();
  // console.log(state);
  const student = state?.data ? state?.data : null;
  const entity = state?.entity;

  const [name, setName] = useState(student ? student.name : "");
  const [subject, setSubject] = useState(student ? student.subject : "");
  const [std, setStd] = useState(student ? student.class : "");
  const [dob, setDob] = useState(
    student ? new Date(student.dob) : new Date("2000-01-01")
  );
  const [address, setAddress] = useState(student ? student.address : "");
  const [phone, setPhone] = useState(student ? student.phone : "");
  const [email, setEmail] = useState(student ? student.email : "");
  const [bloodgroup, setBloodgroup] = useState(
    student ? student.bloodgroup : ""
  );
  const [religion, setReligion] = useState(student ? student.religion : "");
  const [guardianname, setGuardianname] = useState(
    student ? student.guardianname : ""
  );
  const [guardianphone, setGuardianphone] = useState(
    student ? student.guardianphone : ""
  );
  const [guardianrelation, setGuardianrelation] = useState(
    student ? student.guardianrelation : ""
  );
  const [grade, setGrade] = useState(student ? student.grade : "");
  const [attendance, setAttendance] = useState(
    student ? student.attendance : ""
  );
  const [marks, setMarks] = useState(student ? student.marks : "");
  const [gender, setGender] = useState(student ? student.gender : "");

  // new student
  const newStudent = {
    id: `S${Math.floor(Math.random() * 1000)}`,
    name,
    class: std,
    dob,
    address,
    phone,
    email,
    bloodgroup,
    religion,
    guardianname,
    guardianphone,
    guardianrelation,
    grade,
    attendance,
    marks,
    gender
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewStudent = () => {
    if (student) {
      dispatch(updateStudent({ id: student._id, updatedStudent: newStudent }));
      navigate("/students");
    } else {
      if (name === "") {
        alert("Fill all the fields!");
      } else {
        dispatch(addStudent(newStudent));
        navigate("/students");
      }
    }
  };

  const cancelEvent = () => {
    navigate("/students");
  };

  // new teacher
  const newTeacher = {
    id: `T${Math.floor(Math.random() * 1000)}`,
    name,
    subject,
    dob,
    address,
    phone,
    email,
    bloodgroup,
    religion,
    guardianname,
    guardianphone,
    guardianrelation,
    gender
  };

  const addNewTeacher = () => {
    if (student) {
      dispatch(updateTeacher({ id: student._id, updatedTeacher: newTeacher }));
      navigate("/teachers");
    } else {
      if (name === "") {
        alert("Fill all the fields!");
      } else {
        dispatch(addTeacher(newTeacher));
        navigate("/teachers");
      }
    }
  };

  const cancelEventAddTeacher = () => {
    navigate("/teachers");
  };

  return (
    <div className="student-form-container">
      <h2>Registration Form</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch"
          }
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="student-name"
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {entity === "student" && (
            <TextField
              id="student-std"
              label="Class"
              variant="filled"
              value={std}
              type="number"
              onChange={(e) => setStd(e.target.value)}
            />
          )}

          {entity === "teacher" && (
            <TextField
              id="student-std"
              label="Subject"
              variant="filled"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          )}
        </div>

        <div>
          <FormControl sx={{ minWidth: 200, m: 2 }} variant="filled">
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200, m: 2 }} variant="filled">
            <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bloodgroup}
              label="Blood Group"
              onChange={(e) => setBloodgroup(e.target.value)}
            >
              <MenuItem value={"O+"}>O+</MenuItem>
              <MenuItem value={"O-"}>O-</MenuItem>
              <MenuItem value={"A+"}>A+</MenuItem>
              <MenuItem value={"A-"}>A-</MenuItem>
              <MenuItem value={"B+"}>B+</MenuItem>
              <MenuItem value={"B-"}>B-</MenuItem>
              <MenuItem value={"AB+"}>AB+</MenuItem>
              <MenuItem value={"AB-"}>AB-</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <TextField
            id="student-dob"
            label="Date of Birth"
            variant="filled"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            type="date"
          />

          <TextField
            id="student-religion"
            label="Religion"
            variant="filled"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
          />
        </div>

        <div>
          <TextField
            id="student-address"
            label="Address"
            variant="filled"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            id="student-phone"
            label="Phone"
            variant="filled"
            value={phone}
            type="number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <TextField
            id="student-email"
            label="Email"
            variant="filled"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <TextField
            id="student-guardian"
            label="Guardian Name"
            variant="filled"
            value={guardianname}
            onChange={(e) => setGuardianname(e.target.value)}
          />

          <TextField
            id="student-guardian-relation"
            label="Guardian Relation"
            variant="filled"
            value={guardianrelation}
            onChange={(e) => setGuardianrelation(e.target.value)}
          />
        </div>

        <div>
          <TextField
            id="student-guardian-phone"
            label="Guardian Phone"
            variant="filled"
            type="number"
            value={guardianphone}
            onChange={(e) => setGuardianphone(e.target.value)}
          />
        </div>

        {entity === "student" && (
          <div>
            <TextField
              id="student-marks"
              label="Marks"
              variant="filled"
              type="number"
              value={marks}
              helperText="Out of 100%"
              onChange={(e) => setMarks(e.target.value)}
            />

            <TextField
              id="student-grade"
              label="Grade"
              variant="filled"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
        )}

        {entity === "student" && (
          <div>
            <TextField
              id="student-attendance"
              label="Attendance"
              variant="filled"
              type="number"
              value={attendance}
              helperText="Out of 100%"
              onChange={(e) => setAttendance(e.target.value)}
            />
          </div>
        )}
      </Box>

      {entity === "student" && (
        <Stack spacing={20} direction="row" className="button-stack">
          <Button variant="contained" color="error" onClick={cancelEvent}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={addNewStudent}>
            Submit
          </Button>
        </Stack>
      )}

      {entity === "teacher" && (
        <Stack spacing={20} direction="row" className="button-stack">
          <Button
            variant="contained"
            color="error"
            onClick={cancelEventAddTeacher}
          >
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={addNewTeacher}>
            Submit
          </Button>
        </Stack>
      )}
    </div>
  );
}
