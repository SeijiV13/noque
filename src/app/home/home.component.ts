import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    food_near_you = [{
      image: '~/app/assets/images/restau1.jpg',
      title: 'Restaurant A',  
      location: 'Bangkok'
    }];
    featured_restaurants = [];
    constructor() {
        // Use the component constructor to inject providers.
    }



    ngOnInit(): void {
        // Init your component properties here.
    }
}
