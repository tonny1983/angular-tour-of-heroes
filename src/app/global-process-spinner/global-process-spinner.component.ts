import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {GlobalProcessSpinnerService} from '../services/global-process-spinner.service';

@Component({
  selector: 'app-global-process-spinner',
  templateUrl: './global-process-spinner.component.html',
  styleUrls: ['./global-process-spinner.component.css']
})
export class GlobalProcessSpinnerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private gpsService: GlobalProcessSpinnerService) {
    this.gpsService.isLoading.subscribe(s => {
      s ? this.spinner.show('global-spinner') : this.spinner.hide('global-spinner');
    });
  }

  ngOnInit() {
  }

}
