package com.app.sunbeam.dental.doctor;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.sunbeam.dental.timeslot.Timeslot;
import com.app.sunbeam.dental.timeslot.TimeslotRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class DoctorController {
	
	@Autowired
	private DoctorService doctorService;
	@Autowired
	private TimeslotRepository timeslotrepo;
	
	
	@RequestMapping("/doctors")
	public List<Doctor> getAllDoctor(){
	 	return doctorService.getAllDoctor();
	}
	
	@RequestMapping("/doctors/{email}")
	public Optional<Doctor> getDoctor(@PathVariable String email)
	{
		return doctorService.getDoctor(email);
	}
	
	@RequestMapping("/timeslots/{email}")
	public List<Timeslot> getTimeslotsOfThisDoctor(@PathVariable String email)
	{
		List<Timeslot> timeslotOfThisDoctor=new ArrayList<Timeslot>();
		List<Timeslot> list1 =timeslotrepo.findAll();
		for (Timeslot timeslot : list1) {
			if (timeslot.getDoctorId().getEmail().equals(email)) {
				if (timeslot.getStatus().equals("0")) {
					timeslotOfThisDoctor.add(timeslot);
				}
			}
		}
		return timeslotOfThisDoctor;
	}
	
	@RequestMapping(method = RequestMethod.POST,value = "/doctors")
	public void addDoctor(@RequestBody Doctor doctor)
	{
		doctorService.addDoctor(doctor);
	}
	
	@RequestMapping(method = RequestMethod.PUT,value = "/doctors")
	public void updateDoctor(@RequestBody Doctor doctor)
	{
		doctorService.updateDoctor(doctor);
	}
	
	@RequestMapping(method = RequestMethod.PUT,value = "/doctors/updatepassword")
	public void updateDoctorPassword(@RequestBody Doctor doctor)
	{
		doctorService.updateDoctorPassword(doctor);
	}
	
	@RequestMapping(method = RequestMethod.DELETE,value = "/doctors/{email}")
	public void deleteDoctor(@PathVariable String email)
	{
		doctorService.deleteDoctor(email);
	}
}
