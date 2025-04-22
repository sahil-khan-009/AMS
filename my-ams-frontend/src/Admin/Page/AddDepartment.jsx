import React, { useEffect, useState } from "react";
import Select from "react-select";
import Adminnav from "../Component/Adminnav";
import { IoMdAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { adminApi } from "../../Api-folder/Api";

const AddDepartment = () => {
  const [createDepartment, SetcreateDepartment] = useState("");
  const [message, Setmesseage] = useState();
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  // const [departments, setDepartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const appointmentsPerPage = 10;

  const [departments, setDepartments] = useState([]);

  // fetching department with doctor

  useEffect(() => {
    fetchDepartmentWithDoctor();
  }, []);
  const fetchDepartmentWithDoctor = async () => {
    try {
      const response = await adminApi.GetDepartment();
      console.log("Get department with doctor response----", response.data);
      if (response.status === 200) {
        setDepartments(response.data);
      } else {
        console.log("Error in fetching department with doctor");
      }
    } catch (err) {
      console.log(
        "Error in fetching department with doctor this is  catch error ",
        err.message
      );
    }
  };
  // Sample doctor list
  const doctorOptions = [
    { value: "dr_smith", label: "Dr. Smith" },
    { value: "dr_jones", label: "Dr. Jones" },
    { value: "dr_brown", label: "Dr. Brown" },
    { value: "dr_davis", label: "Dr. Davis" },
  ];

  // Pagination Calculation
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = departments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );
  const totalPages = Math.ceil(departments.length / appointmentsPerPage);

  // Function to handle adding a department
  const handleAddDepartment = () => {
    const departmentName = document.getElementById("departmentName").value;
    if (!departmentName) return alert("Please enter a department name");

    const newDepartment = {
      id: departments.length + 1,
      name: departmentName,
      doctors: selectedDoctors.map((doctor) => doctor.label),
    };

    setDepartments([...departments, newDepartment]);
    setSelectedDoctors([]);
    document.getElementById("departmentName").value = "";
  };

  //Onchange Add Department------------------>

  useEffect(() => {
    const timer = setTimeout(() => {
      Setmesseage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);
  // Adding department

  const handleCreateDepartment = async () => {
    try {
      const response = await adminApi.addDepartment(createDepartment);

      console.log("Handlecreate department ------", response);
      if (response.status === 201) {
        Setmesseage(response.data.message);
      } else {
        Setmesseage("Some Errorr Occured!!!!!");
      }
    } catch (err) {
      console.log("Catch error:", err.response?.data || err.message);
    }
  };

  const AddDepartment = (value) => {
    // console.log("this is e  aue-----------",value);
    SetcreateDepartment(value);
    console.log("createDepartment==================", createDepartment);
  };

  return (
    <div className="full-height-bg" style={{ paddingTop: "5em" }}>
      <Adminnav />

      <h3>Add Department</h3>
      <hr />
      <div className="mt-1 d-flex">
        {message && message ? (
          <div className="alert alert-primary" role="alert">
            {message}
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-primary d-flex align-items-center me-auto"
            data-bs-toggle="modal"
            data-bs-target="#doctorModal"
          >
            <IoMdAdd className="me-1 " />
            Add Department
          </button>
        )}

        {/* Modal for Adding Department */}
        <div
          className="modal fade"
          id="doctorModal"
          tabIndex="-1"
          aria-labelledby="doctorModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content bg-light shadow">
              <div className="modal-header">
                <h5 className="modal-title" id="doctorModalLabel">
                  Add New Department
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="departmentName" className="form-label">
                      Department Name ||{" "}
                      <span>(Please Enter First Letter Capital)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="departmentName"
                      placeholder="Enter department name"
                      onChange={(e) => AddDepartment(e.target.value)}
                    />
                  </div>
                  {/* <div className="mb-3"> */}
                  {/* <label htmlFor="doctorSelect" className="form-label">Select Doctor(s)</label>
                    <Select
                      id="doctorSelect"
                      options={doctorOptions}
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={setSelectedDoctors}
                      value={selectedDoctors}
                      placeholder="Choose doctors..."
                     /> */}
                  {/* </div> */}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  onClick={handleCreateDepartment}
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Create Department
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-responsive mt-2">
        <table className="table table-bordered table-responsive mt-3 text-center">
          <thead className="thead">
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Department Name</th>
              <th scope="col">Doctor's Name</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentAppointments.length > 0 ? (
              currentAppointments.map((dept, index) => (
                <tr key={dept._id}>
                <td>{indexOfFirstAppointment + index + 1}</td>

                  <td>{dept.name}</td>
                  <td>
                    {dept.doctors.length > 0 ? (
                      dept.doctors.map((doc) => doc.name).join(", ")
                    ) : (
                      <span className="text-danger">No Doctors Assigned</span>
                    )}
                  </td>

                  <td>
                    <i className="text-dark" type="button">
                      <BiEdit size={20} />
                    </i>
                  </td>
                  <td>
                    <i
                      className="text-danger"
                      type="button"
                      onClick={() =>
                        setDepartments(
                          departments.filter((d) => d.id !== dept.id)
                        )
                      }
                    >
                      <AiFillDelete size={20} />
                    </i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Departments Available</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-3 d-flex justify-content-center">
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-secondary px-2 py-1 rounded-circle"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack className="text-white" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`btn px-3 py-2 rounded-circle ${
                  currentPage === i + 1 ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="btn btn-secondary px-2 py-1 rounded-circle"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages || departments.length === 0}
            >
              <IoIosArrowForward className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
