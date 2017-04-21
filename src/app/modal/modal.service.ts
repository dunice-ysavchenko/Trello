import {Injectable} from '@angular/core';
import { Subject } from "rxjs";



@Injectable()
export class ModalService {
    notifications: Subject<any> = new Subject<any>();

	public getNotification(): Subject<any> {
		return this.notifications;
	}

	public showToast(info: any) {
		console.log('info', info);
		this.notifications.next(info);
	}
}


