import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SimpleAPI';

  selectedFile: any;
  name: any;
  mobile: any;
  email: any;
  password: any;

  // ngOnInit() {
  //   //  profileForm = this.fb.group;
  // }
  constructor(private http: HttpClient) {}
  onFileSelected(event: any) {
    this.selectedFile = null;
    this.selectedFile = <File>event.target.files[0];
    console.log('selected file', this.selectedFile);
  }

  upload() {
    const fd = new FormData();

    fd.append('name', this.name);
    fd.append('mobile', this.mobile);
    fd.append('email', this.email);
    fd.append('password', this.password);
    fd.append('image', this.selectedFile);

    console.log([fd]);
    this.http
      .post('http://192.168.1.169/ChatAppLaravel/public/register', fd)
      .subscribe((res) => {
        console.log(res);
      });
  }

  // constructor(private API: GetAPIService) {}
  // ngOnInit() {
  //   this.API.apiCall().subscribe((data: any) => {
  //     console.warn('get API data', data);
  //     this.title = data.title;
  //   });
  // }

  // constructor(private http: HttpClient) {}
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   this.http
  //     .post(
  //       'http://192.168.1.169/ChatAppLaravel/public/register',
  //       this.selectedFile,
  //       form.value
  //     )
  //     .subscribe((res) => {
  //       console.log('result', res);
  //     });
}
