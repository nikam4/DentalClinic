package com.app.sunbeam.dental.reports;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.app.sunbeam.dental.doctor.Doctor;
import com.app.sunbeam.dental.user.User;

@Entity
public class Reports {
	private Integer id;
	private User user;
	private byte[] reportDoc;
	private Doctor doctor1;
	@Column
    private String docName;
	
	public Reports() {
	}
	
	public Reports(String uemail,String demail) {
		user=new User(uemail);
		doctor1=new Doctor(demail);
	}
	

	public Reports(String docName,byte[] reportDoc) {
		super();
		this.docName=docName;
		this.reportDoc = reportDoc;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	@ManyToOne
	@JoinColumn(name = "user_id1")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	@Lob
	public byte[] getReportDoc() {
		return reportDoc;
	}

	public void setReportDoc(byte[] reportDoc) {
		this.reportDoc = reportDoc;
	}
	@ManyToOne
	@JoinColumn(name = "doctor_id")
	public Doctor getDoctor1() {
		return doctor1;
	}

	public void setDoctor1(Doctor doctor1) {
		this.doctor1 = doctor1;
	}
	
	@Override
	public String toString() {
		return "Reports [reportDoc=" + Arrays.toString(reportDoc) + "]";
	}
	
}
