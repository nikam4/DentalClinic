package com.app.sunbeam.dental.timeslot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimeslotService {
	@Autowired
	TimeslotRepository timeslotRepository;
	
	public Timeslot getOneTimeslot(int id) {
		return timeslotRepository.getOne(id);
		
	}
}
