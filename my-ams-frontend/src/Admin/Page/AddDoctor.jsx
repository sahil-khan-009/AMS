import Select from "react-select";
import { useState } from "react";
import Adminnav from '../Component/Adminnav'
import { IoMdAdd } from "react-icons/io";
import '../PageStyle/AddDoctor.css';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";




const AddDoctor = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { value: "Monday", label: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
        { value: "Saturday", label: "Saturday" },
        { value: "Sunday", label: "Sunday" }
    ];

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };


    return (
        <div className='full-height-bg p-4'>
            <Adminnav />
            <h3 className="mt-5">Add Doctor</h3>
            <hr />
            <div className="mt-1">
                <button type="button" className="btn btn-primary  d-flex align-items-center me-auto" data-bs-toggle="modal" data-bs-target="#doctorModal">
                    <IoMdAdd className="me-1" />
                    Add Doctor
                </button>
            </div>

            {/* Doctor Modal */}
            <div className="modal fade" id="doctorModal" tabindex="-1" aria-labelledby="doctorModalLabel" aria-hidden="true">
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
                                            menuPortalTarget={document.body}  // Ensures dropdown is rendered inside body but not clipped
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
                        <div className="modal-footer ">
                            <button type="button" className="btn btn-primary">Save Doctor</button>
                        </div>
                    </div>
                </div>
            </div >
            {/* table structure start */}
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
                        <tr>
                            <td>1</td>
                            <td>Dr. John Doe</td>
                            <td>john.doe@example.com</td>
                            <td>+1234567890</td>
                            <td>Mon, Wed, Fri</td>
                            <td>10:00 AM - 2:00 PM</td>
                            <td><i className="text-warning" type="button"><FiEdit size={20}/></i></td>
                            <td><i className="text-danger" type="button"><RiDeleteBin7Fill size={20}/></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* table structure end */}
        </div >

    )
}

export default AddDoctor
