import { Component, ViewEncapsulation, Input } from "@angular/core";
import { ModalModel } from "./modal.model";
import { ModalService } from "./modal.service";

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModalComponent {
  @Input() header: string;
	@Input() description: string;
  notifications: Set<ModalModel> = new Set<ModalModel>();

  constructor(private _notificationService: ModalService) {
    this._notificationService.getNotification()
      .subscribe((notification: ModalModel) => {
        this.notifications.add(notification);
      });
  }

  public closeNotification(notification: ModalModel) {
    this.notifications.delete(notification);
  }

}
