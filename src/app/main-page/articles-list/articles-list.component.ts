import { Component, OnInit } from '@angular/core';

import { articles } from '../../articles'

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles = articles;

  constructor() { }

  ngOnInit() {
  }

}
