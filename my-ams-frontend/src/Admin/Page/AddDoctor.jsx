import Select from "react-select";
import { useState } from "react";
import Adminnav from '../Component/Adminnav';
import { IoMdAdd } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../PageStyle/AddDoctor.css';

const AddDoctor = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const DoctorsPerPage = 10;

    // Sample doctors array to prevent errors (Replace with actual data)
    const [departments, setDepartments] = useState([
        { id: 1, name: "Dr. John Doe", email: "john.doe@example.com", phone: "+1234567890", availableDays: "Mon, Wed, Fri", timing: "10:00 AM - 2:00 PM" },
        { id: 2, name: "Dr. Jane Smith", email: "jane.smith@example.com", phone: "+9876543210", availableDays: "Tue, Thu", timing: "9:00 AM - 1:00 PM" },
    ]);

    const options = [
        { value: "Monday", label: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
        { value: "Saturday", label: "Saturday" },
        { value: "Sunday", label: "Sunday" }
    ];

    // Pagination Calculation
    const indexOfLastDoctor = currentPage * DoctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - DoctorsPerPage;
    const currentDoctors = departments.slice(indexOfFirstDoctor, indexOfLastDoctor);
    const totalPages = Math.ceil(departments.length / DoctorsPerPage);

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <div className='full-height-bg p-4'>
            <Adminnav />
            <h3 className="mt-5">Add Doctor</h3>
            <hr />
            <div className="mt-1">
                <button type="button" className="btn btn-primary d-flex align-items-center me-auto" data-bs-toggle="modal" data-bs-target="#doctorModal">
                    <IoMdAdd className="me-1" />
                    Add Doctor
                </button>
            </div>

            {/* Doctor Modal */}
            <div className="modal fade" id="doctorModal" tabIndex="-1" aria-labelledby="doctorModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-light shadow">
                        <div className="modal-header ">
                            <h5 className="modal-title" id="doctorModalLabel">Add New Doctor</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="doctorName" className="form-label">Doctor Name</label>
                                    <input type="text" className="form-control" id="doctorName" placeholder="Enter doctor's name" />
                                </div>
                                <div className='d-flex gap-2'>
                                    <div className="mb-3">
                                        <label htmlFor="doctorEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="doctorEmail" placeholder="Enter email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="doctorPhone" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="doctorPhone" placeholder="Enter phone number" />
                                    </div>
                                </div>
                                <div className='d-flex gap-2'>
                                    <div className="mb-3" style={{ width: '280px' }}>
                                        <label htmlFor="doctorAvailability" className="form-label">
                                            Availability
                                        </label>
                                        <Select
                                            options={options}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={false}
                                            value={selectedOptions}
                                            onChange={handleChange}
                                            placeholder='Select days'
                                            menuPortalTarget={document.body}
                                            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                                            getOptionLabel={(e) => (
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedOptions.some((opt) => opt.value === e.value)}
                                                        readOnly
                                                    />
                                                    {" "}{e.label}
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="timeRange" className="form-label">Available Timing</label>
                                        <div className="input-group">
                                            <input type="time" className="form-control" id="startTime" name="startTime" />
                                            <span className="input-group-text">-</span>
                                            <input type="time" className="form-control" id="endTime" name="endTime" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save Doctor</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Structure */}
            <div>
                <table className="table table-bordered table-responsive mt-3 text-center">
                    <thead className='thead'>
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
                        {currentDoctors.map((doctor, index) => (
                            <tr key={doctor.id}>
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.phone}</td>
                                <td>{doctor.availableDays}</td>
                                <td>{doctor.timing}</td>
                                <td><i className="text-warning" type="button"><FiEdit size={20} /></i></td>
                                <td><i className="text-danger" type="button"><RiDeleteBin7Fill size={20} /></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className=" d-flex justify-content-center">
                <div className="d-flex align-items-center gap-2 ">
                    <button className="btn btn-secondary px-2 py-1 rounded-circle" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                        <IoIosArrowBack className="text-white" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i + 1} className={`btn px-3 py-2 rounded-circle ${currentPage === i + 1 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                    <button className="btn btn-secondary px-2 py-1 rounded-circle" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                        <IoIosArrowForward className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
