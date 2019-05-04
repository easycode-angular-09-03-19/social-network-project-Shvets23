import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
 
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationVisible = false;
  notifications;
  constructor(
    private notificationService : NotificationService
  ) { }

  ngOnInit() {
    this.notificationService.getNotification().subscribe((data) => {
      this.notifications = data;
    }, (err)=>{
      console.log(err, 'err1')
    })
  }
  showNotification() {
    this.notificationVisible = !this.notificationVisible;
  }
  removeNotification(id) {
    this.notifications = this.notifications.filter((el) => {
      return el._id != id;
    })
  }

}
