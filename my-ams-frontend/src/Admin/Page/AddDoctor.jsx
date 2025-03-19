import Select from "react-select";
import { useEffect, useState } from "react";
import Adminnav from "../Component/Adminnav";
import { IoMdAdd } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../PageStyle/AddDoctor.css";
import { adminApi } from "../../Api-folder/Api";

const AddDoctor = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [departmentDropdown, SetdepartmentDropdown] = useState("");
  const [uniqueId, setUniqueId] = useState(""); // Initially empty
  const [name, Setname] = useState("");
  const [departmentId, SetdepartmentId] = useState("");
  const [email, Setemail] = useState("");
  const [contactNumber, SetcontactNumber] = useState("");
  //<------------------------ get api doctor state ----------------------------->
  const [getApiDoctors,SetgetApiDoctors] = useState([]);

  const [startDate, SetStartDate] = useState("");
  const [endDate, SetEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const DoctorsPerPage = 10;

  // Sample doctors array to prevent errors (Replace with actual data)
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      availableDays: "Mon, Wed, Fri",
      timing: "10:00 AM - 2:00 PM",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      email: "jane.smith@example.com",
      phone: "+9876543210",
      availableDays: "Tue, Thu",
      timing: "9:00 AM - 1:00 PM",
    },
  ]);

  const formData = {
    availability: selectedOptions, //Week  days
    uniqueId,
    name,
    department: departmentId,
    email,
    phone: contactNumber,
    endDate,
    start: startDate,
    end: endDate,
  };

  const options = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  // Pagination Calculation
  const indexOfLastDoctor = currentPage * DoctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - DoctorsPerPage;
  const currentDoctors = departments.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );
  const totalPages = Math.ceil(departments.length / DoctorsPerPage);

  //<----------------Week availibility logic---------------->
  const handleChange = (selected) => {
    const selectedValues = selected.map((option) => option.value);
    setSelectedOptions(selectedValues);
    console.log("selectedOptions:-", selectedValues);
  };

  //<--------------------------- GetDepartment ----------------------------->

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminApi.getDoctorDepartment();
        console.log("Response from GET request:", response.data);
        SetdepartmentDropdown(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  //<---------------------------- post department api --------------------->

  async function AddingDoctor(e) {
    e.preventDefault()
    try {
      const response = await adminApi.addDoctor(formData);
      console.log("Rsponse From Post reques", response);
    } catch (err) {
      console.error("Error Fetching data :", err);
    }
  }


//<-------------------------------------  get all doctors api ------------------------------------>

useEffect(()=>{
  const fetchDoctor = async ()=>{
    try {
      const response = await adminApi.getAllDoctor();
     console.log("this is get api response of doctors------", response.data);
     SetgetApiDoctors(response.data)

    }catch(err){
      console.log("this is catch error",err)

    }
  }

  fetchDoctor();

},[])

  //   <-------------------------------Unique id logic--------------------------->

  const generateUniqueId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
    const numbers = "0123456789";

    // Generate random letters (2 to 4 characters)
    const prefix = Array.from(
      { length: Math.floor(Math.random() * 3) + 2 },
      () => letters.charAt(Math.floor(Math.random() * letters.length))
    ).join("");

    // Generate random numbers (2 to 4 digits) + Optional letter at the end
    const suffix = Array.from(
      { length: Math.floor(Math.random() * 3) + 2 },
      () =>
        Math.random() > 0.7
          ? letters.charAt(Math.floor(Math.random() * letters.length))
          : numbers.charAt(Math.floor(Math.random() * numbers.length))
    ).join("");

    return prefix + suffix; // Combine prefix and suffix
  };

  return (
    <div className="full-height-bg p-4">
      <Adminnav />
      <h3 className="mt-5">Add Doctor</h3>
      <hr />
      <div className="mt-1">
        <button
          type="button"
          className="btn btn-primary d-flex align-items-center me-auto"
          data-bs-toggle="modal"
          data-bs-target="#doctorModal"
        >
          <IoMdAdd className="me-1" />
          Add Doctor
        </button>
      </div>

      {/* Doctor Modal */}
      <div
        className="modal fade"
        id="doctorModal"
        tabIndex="-1"
        aria-labelledby="doctorModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-light shadow">
            <div className="modal-header ">
              <h5 className="modal-title" id="doctorModalLabel">
                Add New Doctor
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
                <div className="d-flex gap-1">
                  <div className="mb-3">
                    <label htmlFor="doctorName" className="form-label">
                      Doctor Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="doctorName"
                      placeholder="Enter doctor's name"
                      onChange={(e) => Setname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input type="text" value={uniqueId} readOnly />
                    <button
                      type="button"
                      onClick={() => {
                        const newId = generateUniqueId();
                        setUniqueId(newId);
                        console.log("Generated Unique ID:", newId); // Log new value instead of old state
                      }}
                    >
                      Generate
                    </button>
                  </div>
                  <div className="mb-3">
                    <select
                      name="department"
                      id="doctorName"
                      onChange={(e) => {
                        SetdepartmentId(e.target.value),
                          console.log("departmentId====", departmentId);
                      }} // Update state on selection
                    >
                      <option value="">Select Department</option>
                      {departmentDropdown &&
                        departmentDropdown.map((item, index) => (
                          <option key={index} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <div className="mb-3">
                    <label htmlFor="doctorEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="doctorEmail"
                      placeholder="Enter email"
                      onChange={(e) => Setemail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="doctorPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="doctorPhone"
                      placeholder="Enter phone number"
                      onChange={(e) => SetcontactNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div className="mb-3" style={{ width: "280px" }}>
                    <label htmlFor="doctorAvailability" className="form-label">
                      Availability
                    </label>
                    <Select
                      options={options}
                      isMulti
                      closeMenuOnSelect={false}
                      hideSelectedOptions={false}
                      value={options.filter((option) =>
                        selectedOptions.includes(option.value)
                      )}
                      onChange={handleChange}
                      placeholder="Select days"
                      menuPortalTarget={document.body}
                      styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      }}
                      getOptionLabel={(e) => (
                        <div>
                          <input
                            type="checkbox"
                            checked={selectedOptions.includes(e.value)}
                            readOnly
                          />{" "}
                          {e.label}
                        </div>
                      )}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="timeRange" className="form-label">
                      Available Timing
                    </label>
                    <div className="input-group">
                      <input
                        type="time"
                        className="form-control"
                        id="startTime"
                        name="startTime"
                        onChange={(e) => {
                          SetStartDate(e.target.value),
                            console.log(
                              "startDate-------------------",
                              startDate
                            );
                        }}
                      />
                      <span className="input-group-text">-</span>
                      <input
                        type="time"
                        className="form-control"
                        id="endTime"
                        name="endTime"
                        onChange={(e) => {
                          SetEndDate(e.target.value),
                            console.log("endDate=======", endDate);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={AddingDoctor}
              >
                Add Doctor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Structure */}
      <div>
        <table className="table table-bordered table-responsive mt-3 text-center">
          <thead className="thead">
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Available Days</th>
              <th scope="col">Available Timing</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
  {getApiDoctors.length > 0 ? (
    getApiDoctors.map((doctor, index) => (
      <tr key={doctor._id}>
        <td>{index + 1}</td>
        <td>{doctor.name}</td>
        <td>{doctor.email}</td>
        <td>{doctor.phone}</td>
        <td>{doctor.availability?.join(", ") || "N/A"}</td>
        <td>{doctor.timings?.start || "N/A"} - {doctor.timings?.end || "N/A"}</td>
        <td>
          <i className="text-warning" type="button">
            <FiEdit size={20} />
          </i>
        </td>
        <td>
          <i className="text-danger" type="button">
            <RiDeleteBin7Fill size={20} />
          </i>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="8" className="text-center">
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>

      {/* Pagination */}
      <div className=" d-flex justify-content-center">
        <div className="d-flex align-items-center gap-2 ">
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
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;