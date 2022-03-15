package com.app.sunbeam.dental.user;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.sunbeam.dental.doctor.Doctor;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User getUser(String email) {
	
		User u=userRepository.getOne(email);
		System.out.println(u);
		return u;
	}

	public void addUser(User user) {
		userRepository.save(user);
	}
	
	public void updateUser(User user) {
		userRepository.save(user);
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public void deleteUser(String email) {
		
		userRepository.deleteById(email);
	}

	public User login(String email, String password) {
		
		User u=userRepository.getOne(email);
		if(u.getPassword().equals(password))
			return u;
		return null;
	}

	public void updateUsePass(User user) {
		userRepository.save(user);
	}

	public List<User> getAllDoctors() {

		List<User> doctors=userRepository.findAll();
		List<User> finalListOfDoctors=new ArrayList<User>();
		for (User user : doctors) {
//			System.out.println(user.getRole());
			if(user.getRole().toString().equals("DOCTOR"))
			{
				finalListOfDoctors.add(user);
			}
			
		}
		System.out.println("================="+finalListOfDoctors);
		return finalListOfDoctors;
	}

}
