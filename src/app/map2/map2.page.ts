import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.page.html',
  styleUrls: ['./map2.page.scss'],
})
export class Map2Page implements OnInit {

  map: Leaflet.Map;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
    Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
    Leaflet.marker([35, 66]).addTo(this.map).bindPopup('Leh').openPopup();

    //add circles to markers
    var circleoption1, circleoption2, circleoption3;
    circleoption1 = {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0
    }

    circleoption2 = {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0
    }

    circleoption3 = {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0
    }

    Leaflet.circle([28.6, 77], 500, circleoption1).addTo(this.map);
    Leaflet.circle([34, 77], 300, circleoption1).addTo(this.map);
    Leaflet.circle([35, 66], 600, circleoption1).addTo(this.map);
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }

}
