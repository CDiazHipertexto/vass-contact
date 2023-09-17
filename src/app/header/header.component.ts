import { Component, OnInit, HostListener } from '@angular/core';
// @ts-ignore
import itemsMenu from 'src/assets/itemsMenu.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHovering = false;
  isHoveringSub = false;

  itemsMenuu = [
    {
      "item":  "Casos de éxito",
    },
    {
      "item":  "Mercados",
      "subItems": [
        {
          "item": "Sub Item 1"
        },
        {
          "item": "Sub Item 2"
        }
        ]
    },
    {
      "item":  "Países",
      "classItem": "click",
      "subItems": [
        {
          "item": "Chile"
        },
        {
          "item": "Colombia"
        },
        {
          "item": "Mexico"
        },
        {
          "item": "Peru"
        },
        {
          "item": "Reino Unido"
        },
        {
          "item": "Benelux"
        }
        ]
    },
    {
      "item":  "Somos VASS",
      "subItems": [
        {
          "item": "Sub Item 1"
        },
        {
          "item": "Sub Item 2"
        }
      ]
    },
    {
      "item":  "Cómo lo hacemos",
      "subItems": [
        {
          "item": "Sub Item 1"
        },
        {
          "item": "Sub Item 2"
        }
      ]
    },
    {
      "item":  "VASS Research",
      "subItems": [
        {
          "item": "Sub Item 1"
        },
        {
          "item": "Sub Item 2"
        }
      ]
    },
    {
      "item":  "EN"
    }
    ];

  activeToggle = false;
  toggleMenu(){
    this.activeToggle = !this.activeToggle
  };

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 150;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
