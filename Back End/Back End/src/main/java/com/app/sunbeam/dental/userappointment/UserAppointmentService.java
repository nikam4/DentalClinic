package com.app.sunbeam.dental.userappointment;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.sunbeam.dental.timeslot.Timeslot;
import com.app.sunbeam.dental.timeslot.TimeslotRepository;

@Service
public class UserAppointmentService {

	
	@Autowired
	private UserAppointmentRepository userAppointmentRepository;
	
	@Autowired
	private TimeslotRepository timeslotRepository;
	
	
	public List<UserAppointment> getAllUserAppointment() {
		return userAppointmentRepository.findAll();
	}


	public UserAppointment getUserAppointment(Integer id) {
		return userAppointmentRepository.getOne(id);
	}


	public void addUserAppointment(UserAppointment userAppointment) {
			Timeslot t1=userAppointment.getTimeslot();
			
		if(timeslotRepository.getOne(t1.getId()).getStatus().equals("0")) 
		{
			if(userAppointmentRepository.save(userAppointment)!=null)
			{
				Timeslot t=userAppointment.getTimeslot();
				Timeslot aTimeslot=timeslotRepository.getOne(t.getId());
				aTimeslot.setStatus("1");
				timeslotRepository.save(aTimeslot);
			}
		}
	}

	public List<UserAppointment> getAllUserAppointmentOfThisUser(String email) {
		List<UserAppointment>list=userAppointmentRepository.findAll();
		List<UserAppointment>thisUserAppointmentList=new ArrayList<UserAppointment>();
		for (UserAppointment userAppointment : list) {
			if (userAppointment.getUser1().getEmail().equals(email)) {
				thisUserAppointmentList.add(userAppointment);
			}
		}
		return thisUserAppointmentList;
	}


	public void deleteUserAppointment( Integer id) {
		userAppointmentRepository.deleteById(id);
	}


	public List<UserAppointment> getAllUserAppointmentOfThisDoctor(String email) {

		List<UserAppointment>list=userAppointmentRepository.findAll();
		
		List<UserAppointment>thisUserAppointmentList=new ArrayList<UserAppointment>();
		
		for (UserAppointment userAppointment : list) {
		
			if (userAppointment.getDoc().getEmail().equals(email) && userAppointment.getStatus().equals("n")) {
			
				thisUserAppointmentList.add(userAppointment);
			}
		}
		return thisUserAppointmentList;
	}


	public UserAppointment updateUserAppointment(UserAppointment userAppointment) {
		return userAppointmentRepository.save(userAppointment);
	}


	public UserAppointment getSingleAppointment(String email, String id) {
		List<UserAppointment> uAppointments= userAppointmentRepository.findAll();
		for (UserAppointment userApp : uAppointments) {
			if(userApp.getId().equals(Integer.valueOf(id)))
				return userApp;
		}
		return null;
	}


	public UserAppointment updateAppoStatus(UserAppointment userAppointment) {
		return userAppointmentRepository.save(userAppointment);
	}
	
	
}
