package com.app.sunbeam.dental.userappointment;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.sunbeam.dental.doctor.Doctor;
import com.app.sunbeam.dental.timeslot.Timeslot;
import com.app.sunbeam.dental.timeslot.TimeslotRepository;
import com.app.sunbeam.dental.user.NotificationService;
import com.app.sunbeam.dental.user.User;
import com.app.sunbeam.dental.user.UserRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserAppointmentController {

	@Autowired
	private UserAppointmentService userAppointmentService;
	@Autowired
	private TimeslotRepository TimeslotRepository;
	@Autowired
	private UserAppointmentRepository UserAppointmentRepository;
	@Autowired
	private NotificationService notification;
	
	
	@RequestMapping("/userappointments")
	public List<UserAppointment> getAllUserAppointment()
	{
		return userAppointmentService.getAllUserAppointment();
	}
	
	@RequestMapping("/users/userappointments/{email}")
	public List<UserAppointment> getAllUserAppointmentOfThisUser(@PathVariable String email)
	{
		return userAppointmentService.getAllUserAppointmentOfThisUser(email);
	}
	
	@RequestMapping("/doctors/{email}/userappointments")
	public List<UserAppointment> getAllUserAppointmentOfThisDoctor(@PathVariable String email)
	{
		return userAppointmentService.getAllUserAppointmentOfThisDoctor(email);
	}
	
	@RequestMapping("/users/{email}/userappointment/{id}")
	public UserAppointment getSingleAppointment(@PathVariable String email,@PathVariable String id)
	{
		return userAppointmentService.getSingleAppointment(email,id);
	}
	
	@RequestMapping(method = RequestMethod.POST,value = "/user/{email}/doctor/{docemail}/userappointment")
	public void addUserAppointment(@RequestBody UserAppointment userAppointment,@PathVariable String email,@PathVariable String docemail) {
		
		userAppointment.setUser1(new User(email));
		userAppointment.setDoc(new Doctor(docemail));
		userAppointmentService.addUserAppointment(userAppointment);
		notification.sendAppointmentConfirmation(userAppointment);
	}
	
	@RequestMapping(method = RequestMethod.PUT,value = "/users/{email}/userappointments")
	public void updateUserAppointment(@PathVariable String email,@RequestBody UserAppointment userAppointment)
	{	
		if (userAppointmentService.updateUserAppointment(userAppointment)!=null) {
			UserAppointment u=userAppointmentService.getSingleAppointment(email, userAppointment.getId().toString());
			Timeslot t=u.getTimeslot();
			t.setStatus("0");
			TimeslotRepository.save(t);
			Timeslot t1=userAppointment.getTimeslot();
			t1.setStatus("1");
			TimeslotRepository.save(t1);	
		}
	}
	
	@RequestMapping(method = RequestMethod.PUT,value = "/doctor/appointment")
	public UserAppointment updateAppStatus(@RequestBody UserAppointment userAppointment) {
		
		System.out.println(userAppointment);
		return userAppointmentService.updateAppoStatus(userAppointment);
	}
	
	@RequestMapping(method = RequestMethod.DELETE,value =  "/users/userappointments/{id}")
	public void deleteUserAppointment(@PathVariable Integer id)
	{	UserAppointment u=userAppointmentService.getUserAppointment(id);
		userAppointmentService.deleteUserAppointment(id);
		Timeslot timeslot=TimeslotRepository.getOne(u.getTimeslot().getId());
		timeslot.setStatus("0");
		TimeslotRepository.save(timeslot);
	}
	
	@RequestMapping("/timeslots")
	public List<Timeslot> getAllTimeslot()
	{
		List<Timeslot>list=TimeslotRepository.findAll();
		List<Timeslot>timeslotslist=new ArrayList<Timeslot>();
		for (Timeslot timeslot : list) {
			if(timeslot.getStatus().equals("0"))
				timeslotslist.add(timeslot);
		}
		System.out.println(timeslotslist);
		return timeslotslist;
	}
}
