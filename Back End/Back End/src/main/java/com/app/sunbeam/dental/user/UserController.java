package com.app.sunbeam.dental.user;

import java.util.List;
import java.util.Optional;

import javax.jws.soap.SOAPBinding.Use;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.sunbeam.dental.doctor.Doctor;
import com.app.sunbeam.dental.doctor.DoctorController;
import com.app.sunbeam.dental.reports.ReportsService;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

		@Autowired
		private UserService userService;
		
		@Autowired
		private ReportsService ReportsService;
		@Autowired
		private DoctorController DoctorController;
		@Autowired
		private NotificationService notification;
		
		
		@RequestMapping(method = RequestMethod.POST,value = "/userslogin")
		public User login(@RequestBody User u)
		{
			User user=userService.login(u.getEmail(),u.getPassword());
			if (user!=null) {
				return user;	
			}
			return new User();
		}
		
		@RequestMapping("/users")
		public List<User> getAllUsers(){
			return userService.getAllUsers();
		}
		
		@RequestMapping("/users/{email}")
		public User getUser(@PathVariable String email)
		{
			return userService.getUser(email);
		}
		
		@RequestMapping("/alldoctors")
		public List<User> getAllDoctors()
		{
			return userService.getAllDoctors();
		}
		
		@RequestMapping(method = RequestMethod.POST,value = "/users")
		public void addUser(@RequestBody User user)
		{
			if(user.getRole().toString().equals("DOCTOR")) {
				DoctorController.addDoctor(new Doctor(user.getFirstName(), user.getMiddleName(), user.getLastName(), user.getGender(), user.getMobileNo(), user.getEmail()));
			}
			userService.addUser(user);
			notification.sendRegNotification(user);
			
		}
		
		@RequestMapping(method = RequestMethod.PUT,value = "/users")
		public void updateUser(@RequestBody User user) {
			userService.updateUser(user);
		}
		
		@RequestMapping(method = RequestMethod.POST,value = "/users/changepassword")
		public void updateUsePass(@RequestBody User user) {
//			System.out.println(user);
			userService.updateUsePass(user);
		}
		
		@RequestMapping(method = RequestMethod.DELETE,value = "/users/{email}")
		public void rmUser(@PathVariable String email) {
			User user=userService.getUser(email);
			if(user.getRole().toString().equals("DOCTOR")) 
			{
				DoctorController.deleteDoctor(email);;
			}
			userService.deleteUser(email);
		}
}
