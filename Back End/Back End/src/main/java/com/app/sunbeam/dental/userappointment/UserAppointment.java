package com.app.sunbeam.dental.userappointment;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.sunbeam.dental.doctor.Doctor;
import com.app.sunbeam.dental.timeslot.Timeslot;
import com.app.sunbeam.dental.user.User;

@Entity
public class UserAppointment {
	private Integer id;
	
	private Doctor doc;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date date;
	private Timeslot timeslot;
	private String patientName;
	private String status;
	private User user1;
	private String mobile;
	
	public UserAppointment() {
	}

	public UserAppointment(Date date, Timeslot timeslot, String mobile,String userid,String useremail,String docemail,Integer id) {
		this.date = date;
		this.timeslot=timeslot;
		this.mobile = mobile;
		this.user1=new User(useremail);
		this.doc=new Doctor(docemail);
		this.timeslot=new Timeslot(id);
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	@OneToOne
	@JoinColumn(name = "doctor_id")
	public Doctor getDoc() {
		return doc;
	}

	public void setDoc(Doctor doc) {
		this.doc = doc;
	}
	@Temporal(TemporalType.DATE)
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	@ManyToOne
	@JoinColumn(name = "userid",updatable = false)
	public User getUser1() {
		return user1;
	}

	public void setUser1(User user) {
		this.user1 = user;
	}
	@Column(length = 15)
	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	@Override
	public String toString() {
		return "UserAppointment [date=" + date + ", patientName=" + patientName + ", status=" + status + ", mobile="
				+ mobile + "]";
	}

	@OneToOne
	@JoinColumn(name = "timeslot_id")
	public Timeslot getTimeslot() {
		return timeslot;
	}

	public void setTimeslot(Timeslot timeslot) {
		this.timeslot = timeslot;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	@Column(length = 50)
	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	
}
