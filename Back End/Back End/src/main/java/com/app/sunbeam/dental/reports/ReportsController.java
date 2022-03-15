package com.app.sunbeam.dental.reports;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.sunbeam.dental.doctor.Doctor;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ReportsController {

	@Autowired
	private ReportsService reportsService;
	
	@RequestMapping("/users/{email}/reports")
	public List<Reports> getReportsOfThisUser(@PathVariable String email)
	{
		return reportsService.getReportsOfThisUser(email);
	}
	
	@RequestMapping(method = RequestMethod.POST,value = "/doctors/{docemail}/reports")
	public void addReport(@RequestBody Reports report,@PathVariable String docemail)
	{
		report.setDoctor1(new Doctor(docemail));
		reportsService.addReport(report);
	}
	
}
