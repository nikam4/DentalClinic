package com.app.sunbeam.dental.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.sunbeam.dental.doctor.DoctorService;
import com.app.sunbeam.dental.timeslot.TimeslotRepository;
import com.app.sunbeam.dental.timeslot.TimeslotService;
import com.app.sunbeam.dental.userappointment.UserAppointment;

@Service
public class NotificationService {

	private JavaMailSender javaMailSender;
	
	@Autowired
	private UserService userservice;
	
	@Autowired
	private TimeslotService timeslotService;
	
	@Autowired
	private DoctorService doctorService;
	
	@Autowired
	private TimeslotRepository timeslotRepository;
	
	@Autowired
	public NotificationService(JavaMailSender javaMailSender)
	{
		this.javaMailSender=javaMailSender;
	}
	public void sendRegNotification(User user)
	{
		SimpleMailMessage mail=new SimpleMailMessage();
		mail.setTo(user.getEmail());
		mail.setFrom("dhairyasheelnikam4@gmail.com");
		mail.setSubject("DentoCare Clinic registration");
		mail.setText("Hello, "+user.getFirstName()+" Your registration with DentoCare is successful. Your login details are : Email: "+user.getEmail()+" and Password:"+user.getPassword());
		javaMailSender.send(mail);
	}
	public void sendAppointmentConfirmation(UserAppointment userAppointment)
	{
		SimpleMailMessage mail=new SimpleMailMessage();
		mail.setTo(userAppointment.getUser1().getEmail());
		mail.setFrom("dhairyasheelnikam4@gmail.com");
		mail.setSubject("DentoCare Clinic appointment booking Status");
		mail.setText("Hello, "+userservice.getUser(userAppointment.getUser1().getEmail()).getFirstName()+" Your appointment is booked with DentoCare Clinic is successfully. Your appointment is fixed at Date:"+userAppointment.getDate().getDate()+" at "+timeslotService.getOneTimeslot(userAppointment.getTimeslot().getId()).getTime()+" with Dr."+doctorService.getoneDoctor(userAppointment.getDoc().getEmail()).getFirstName());
		javaMailSender.send(mail);
	}
}
