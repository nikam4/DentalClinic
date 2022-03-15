package com.app.sunbeam.dental.timeslot;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.sunbeam.dental.doctor.Doctor;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Timeslot {
	private Integer id;
	@JsonIgnore
	private Doctor doctorId;
	@JsonFormat(pattern = "HH:mm:ss",timezone="IST")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date time;
	private String status;
	
	public Timeslot() {
		// TODO Auto-generated constructor stub
	}
	
	public Timeslot(int id) {
		this.id=id;
	}
	
	public Timeslot(Date time) {
		super();
		this.time = time;
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
	@JoinColumn(name = "doctor_id")
	public Doctor getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(Doctor doctorId) {
		this.doctorId = doctorId;
	}
	
	@Temporal(TemporalType.TIME)
	@Column(name = "slot_time")
	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "Timeslot [doctorId=" + doctorId + ", time=" + time + "]";
	}

	@Column(length = 5)
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	
	
	
}
