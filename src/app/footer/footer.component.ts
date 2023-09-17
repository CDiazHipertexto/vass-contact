import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isHovering = false;
  isHoveringSub = false;

  itemsMenu = [
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    }
  ];
  itemsMenuTwo = [
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    }
  ];
  itemsMenuThree = [
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    },
    {
      "item":  "Lorem Ipsum",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
