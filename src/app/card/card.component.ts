import { Component, OnInit } from '@angular/core';
import { SERVER_DATA } from '@views/service/service'
import { Observable, Subscription, of } from "rxjs";
import { ICurrentData } from "@views/interface/dataServer.interface"


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {



  public subscriptions$: Subscription = new Subscription


  constructor(public serverData: SERVER_DATA) {}

  public data: ICurrentData[] = this.serverData.data.data

  public dataObservable:Observable<ICurrentData[]> = of(this.data)

  public dataJson: ICurrentData[] = new Array;




  ngOnInit(): void {





    // this.serverData.subscriptions$.add()

    // .readOne(Utils.Data.EntityList.info)
    // .pipe()
    // .subscribe(response => this.controlSourceRefresh.push(response));


  }

}
