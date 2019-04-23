import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';

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
      console.log(this.notifications, 'work1');
    }, (err)=>{
      console.log(err, 'err')
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
