import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Navigation } from '../../models/navigation.model';

@Component({
  selector: 'app-navigation-filter',
  templateUrl: './navigation-filter.component.html',
  styleUrls: ['./navigation-filter.component.scss']
})
export class NavigationFilterComponent implements OnInit {
  @Input() listNavigation!: Navigation[]
  @Output() selected = new EventEmitter<Navigation>();
  selectedNavigation!: Navigation;

  constructor() { }

  ngOnInit() {
    this.selectFirstIndex();
  }

  getNavigationItem(event: Navigation){
    this.selectedNavigation = event;
    this.selected.emit(event)

  }

  selectFirstIndex(){
    if (this.listNavigation && this.listNavigation.length > 0) {
      this.selectedNavigation = this.listNavigation[0];
      this.selected.emit(this.selectedNavigation)
    }
  }
}
