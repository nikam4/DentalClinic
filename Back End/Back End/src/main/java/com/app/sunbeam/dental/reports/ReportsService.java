package com.app.sunbeam.dental.reports;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportsService {

	
	@Autowired
	private ReportsRepository reportsRepository;

	public List<Reports> getReportsOfThisUser(String email) {
		List<Reports>list=reportsRepository.findAll();
		
		List<Reports> reportList=new ArrayList<Reports>();
		
		for (Reports report : list) {
			if (report.getUser().getEmail().equals(email)) {
				reportList.add(report);
			}
		}
		return reportList;
	}

	public void addReport(Reports report) {
		reportsRepository.saveAndFlush(report);
	}
	
    public Optional<Reports> getFile(Integer fileId) {
        return reportsRepository.findById(fileId);
                
    }
    
    
    
}

