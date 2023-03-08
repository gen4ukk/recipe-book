import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/DataStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipe();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipe();
    this.cdr.detectChanges();
  }

}
