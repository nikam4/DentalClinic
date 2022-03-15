import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import {NgModel,NgForm,FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ReportsComponent } from './reports/reports.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { AdminComponent } from './admin/admin.component';
import { EditDoctorProfileComponent } from './edit-doctor-profile/edit-doctor-profile.component';
import { EditAdminProfileComponent } from './edit-admin-profile/edit-admin-profile.component';
import { CheckuserappointmentsComponent } from './checkuserappointments/checkuserappointments.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorAppointmentListComponent } from './doctor-appointment-list/doctor-appointment-list.component';
import { ChangeAppointmentStatusComponent } from './change-appointment-status/change-appointment-status.component';
import { AdminAppointmentListComponent } from './admin-appointment-list/admin-appointment-list.component';
import { AdminListOfDoctorsComponent } from './admin-list-of-doctors/admin-list-of-doctors.component';
import { AddNewDoctorComponent } from './add-new-doctor/add-new-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EditComponent,
    DeleteComponent,
    RegisterComponent,
    NotfoundComponent,
    LoginComponent,
    ProfileComponent,
    ChangepasswordComponent,
    ReportsComponent,
    AppointmentsComponent,
    BookAppointmentComponent,
    DoctorprofileComponent,
    AdminComponent,
    EditDoctorProfileComponent,
    EditAdminProfileComponent,
    CheckuserappointmentsComponent,
    FooterComponent,
    DoctorAppointmentListComponent,
    ChangeAppointmentStatusComponent,
    AdminAppointmentListComponent,
    AdminListOfDoctorsComponent,
    AddNewDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path:"",component:HomeComponent },

      { path:"home",component:HomeComponent },
      { path:"about",component:AboutComponent },
      { path:"register",component:RegisterComponent},
      { path:"login",component:LoginComponent },
      { path:"profile",component:ProfileComponent, canActivate:[AuthService] },
      { path:"changepassword",component:ChangepasswordComponent, canActivate:[AuthService] },
      { path:"reports",component:ReportsComponent, canActivate:[AuthService] },
      { path:"appointments",component:AppointmentsComponent, canActivate:[AuthService] },
      { path:"newappointment",component:BookAppointmentComponent, canActivate:[AuthService] },
      { path:"drprofile",component:DoctorprofileComponent, canActivate:[AuthService] },
      { path:"admin",component:AdminComponent, canActivate:[AuthService] },
      { path:"editadminprofile",component:EditAdminProfileComponent, canActivate:[AuthService] },
      { path:"editdrprofile",component:EditDoctorProfileComponent, canActivate:[AuthService] },
      { path:"drappointmentlist",component:DoctorAppointmentListComponent, canActivate:[AuthService] },
      { path:"changeappointmentstatus/:app.id",component:ChangeAppointmentStatusComponent, canActivate:[AuthService] },
      { path:"listallappointment",component:AdminAppointmentListComponent, canActivate:[AuthService] },
      { path:"doctorslist",component:AdminListOfDoctorsComponent, canActivate:[AuthService] },
      { path:"newdoctor",component:AddNewDoctorComponent, canActivate:[AuthService] },

      { path:"checkuserappointment",component:CheckuserappointmentsComponent, canActivate:[AuthService] },


      { path:"editprofile",component:EditComponent,canActivate:[AuthService]},
      { path:"delete/:id",component:DeleteComponent,canActivate:[AuthService] },
      
      { path:"**",component:NotfoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
