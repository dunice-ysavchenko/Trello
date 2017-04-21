import { Component, OnInit, Input, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'list-name-component',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.css']
})
export class ListNameComponent {

  @Input() list: string;
  edit: boolean = false;
  newName: string;
  public eRef;

  constructor(elementRef: ElementRef) {
    this.eRef = elementRef;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.edit = true;
    } else {
      this.edit = false;
      console.log("clicked outside");
    }
  }
}
