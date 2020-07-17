import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map4',
  templateUrl: './map4.page.html',
  styleUrls: ['./map4.page.scss'],
})
export class Map4Page implements OnInit {

  map: Leaflet.Map;

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  ionViewDidEnter() { 
    //this.leafletMap(); 
  }

  leafletMap(lat:any, lon:any) {
    this.map = Leaflet.map('mapId').setView([lat, lon], 18);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Ion4Material',
    }).addTo(this.map);

    Leaflet.marker([lat, lon]).addTo(this.map).bindPopup('Me!').openPopup();
   
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }

  public getMyPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.leafletMap(resp.coords.latitude,resp.coords.longitude);
      //console.log(resp.coords.latitude);
      //console.log(resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
