import {Injectable} from '@angular/core';
import { Subject } from "rxjs";
import { ModalModel } from "./modal.model";


@Injectable()
export class ModalService {
    private notifications: Subject<ModalModel> = new Subject<ModalModel>();

	public getNotification(): Subject<ModalModel> {
		return this.notifications;
	}

	public showToast(info: ModalModel) {
		this.notifications.next(info);
	}
}


