const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();
const isLoggedIn = require('../middlewares/IsLoggedin');

router.post("/appointments", isLoggedIn, async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Add this line to debug
    const appointment = new Appointment({ ...req.body, userId: req.user._id }); // 
  
console.log("userId: req.user._id-----------------",req.user._id)
    // console.log("appointment-----Created",appointment);
    console.log("user------>", req.user);
    const savedAppointment = await appointment.save();
    res.status(201).json({
      message: "Appointment requested successfully",
      appointment: savedAppointment,
    });
  } catch (err) {
    res.status(500).json({  error: err.message });
  }
});

//get user appointment status
router.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user._id }).populate("userId", "userName userEmail role"); // Populate specific fields from User
    
    console.log("appointmentsId------",appointments)
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put("/updateAppointment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log('It is Post Id=====',id)
    let { patientName, doctorName, appointmentDate, description ,patientemail} = req.body;

    let update = await Appointment.findByIdAndUpdate(
       id ,
      {
        patientName,
        doctorName,
        appointmentDate,
        description,
        patientemail
        
      },
      { new: true } // return the updatedAppointmentd document
    );
    if (!update) {
      return res.status(404).json({ err: "Appontment Not Found" });
    }

    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/deleteAppointment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('that is the id of Delete Route--------',id)

    // Check if the appointment exists
    const deleteAppointment = await Appointment.findByIdAndDelete(id);

    if (!deleteAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    console.log('Appointment deleted successfully');
    return res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
    
  }
 
});


module.exports = router;
