package com.app.sunbeam.dental.doctor;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.sunbeam.dental.timeslot.TimeslotRepository;

@Service
public class DoctorService {

	@Autowired
	private DoctorRepository doctorRepository;
	
	
	public List<Doctor> getAllDoctor() {
		return doctorRepository.findAll();
	}

	public void addDoctor(Doctor doctor) {
		doctorRepository.save(doctor);
	}

	public Optional<Doctor> getDoctor(String email) {

		return doctorRepository.findById(email);
	}
	public Doctor getoneDoctor(String email)
	{
		return doctorRepository.getOne(email);
	}

	public void updateDoctor(Doctor doctor) {
		doctorRepository.save(doctor);
	}
	
	public void deleteDoctor(String email) {

		doctorRepository.deleteById(email);
	}

	public void updateDoctorPassword(Doctor doctor) {
		doctorRepository.save(doctor);
	}

}
