import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent {

  constructor(private api:ApiService){

    api.fetchPhoto().subscribe(

      (response)=>{
        this.photo=response
      }
    )
  }

  photo:any=[]

}
