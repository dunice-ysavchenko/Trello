import {Injectable} from '@angular/core';
import {BOARDS} from './mock-board';

@Injectable()
export class BoardService {
    getBoards() {
        return BOARDS;
    }
}