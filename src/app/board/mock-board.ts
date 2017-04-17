import { Board } from './board';

export const BOARDS: Board[] = [
  { boardName: 'board1', id: 1, lists: [{listName:'ToDo', id:1, cards: [{cardName: '1'}, {cardName: '2'}]},{listName:'Done', id:2, cards: []}]},
  { boardName: 'board2', id: 2, lists: [{listName:'ToDo', id:1, cards: [{cardName: '1'}, {cardName: '2'}]},{listName:'Done', id:2, cards: []}]},
  { boardName: 'board3', id: 3, lists: [{listName:'ToDo', id:1, cards: [{cardName: '1'}, {cardName: '2'}]},{listName:'Done', id:2, cards: []}]},
  { boardName: 'board4', id: 4, lists: [{listName:'ToDo', id:1, cards: [{cardName: '1'}, {cardName: '2'}]},{listName:'Done', id:2, cards: []}]}
]