import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor(public http:HttpClient) { }

  login(user)
  {
    return this.http.post("http://localhost:8001/userslogin",user);
  }

  insertUser(user)
  {
    return this.http.post("http://localhost:8001/users",user);
  }

  allDoctors()
  {
    return this.http.get("http://localhost:8001/doctors");
  }

  getUser(email)
  {
    return this.http.get("http://localhost:8001/users/" + email);
  }

  updateUser(user)
  {
    return this.http.put("http://localhost:8001/users",user);
  }

  changePassword(user)
  {
    return this.http.post("http://localhost:8001/users/changepassword",user);
  }

  getTimeslots(email)
  {
    return this.http.get("http://localhost:8001/timeslots/"+email);
  }
 
  getAppointmentsOfThisUser(email)
  {
    return this.http.get("http://localhost:8001/users/userappointments/"+email);
  }
  getAllTimeslots()
  {
    return this.http.get("http://localhost:8001/timeslots");
  }
  addAppointment(app,uemail,docemail)
  {
    return this.http.post("http://localhost:8001/user/"+uemail+"/doctor/"+docemail+"/userappointment",app)
  }

  deleteAppointment(id)
  {
    return this.http.delete("http://localhost:8001/users/userappointments/" + id)
  }
  getSingleAppointmentOfThisUser(email,id)
  {
    return this.http.get("http://localhost:8001/users/"+email+"/userappointment/"+id)
  }
  updateAppointment(apppintment,email)
  {
    return this.http.put("http://localhost:8001/users/"+email+"/userappointments/",apppintment)
  }
  getAppointmentsOfThisDoctor(email)
  {
    return this.http.get("http://localhost:8001/doctors/"+email+"/userappointments");
  }

  updateAppointmentStatus(apppintment)
  {
    return this.http.put("http://localhost:8001/doctor/appointment",apppintment)
  }
  getAllAppointments() 
  {
    return this.http.get("http://localhost:8001/userappointments")
  }
  allDoctorList()
  {
    return this.http.get("http://localhost:8001/alldoctors");
  }
}
