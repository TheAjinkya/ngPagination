import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  items:any[] =[]

  pageOfItems:any[]= []

  constructor() { }

  ngOnInit(): void {
    this.items = Array(150).fill(0).map((x,i)=>({id:i+1, name: `Item ${i+1}`}))
  }

  onChangePage(pageOfItems:Array<any>){
    console.log("pageOfItems",pageOfItems)
    this.pageOfItems = pageOfItems
  }

}
