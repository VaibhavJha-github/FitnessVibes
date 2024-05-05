import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements AfterViewInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  map: any;
  workoutPath: any;
  workoutPathCoordinates: any[] = [];
  distance: number | null = null;
  calories: number | null = null;
  weight: number | null = null;

  constructor() {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit MapPage');

    // Main map
    let LatLng = new google.maps.LatLng(-27.545, 153.0342);
    let mapOptions = {
      center: LatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapOptions
    );

    // Markers for popular nearby gym sites

    // Remaining code...
  }

  startWorkout() {
    if (this.weight === null || this.weight <= 0) {
      // Weight input validation
      alert('Please enter a valid weight.');
      return;
    }

    // Initialize workout path and coordinates
    this.workoutPathCoordinates = [];
    this.workoutPath = new google.maps.Polyline({
      path: this.workoutPathCoordinates,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 3,
      map: this.map,
    });

    // Start tracking the user's position
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // Add current position to the workout path
        this.workoutPathCoordinates.push(pos);
        this.workoutPath.setPath(this.workoutPathCoordinates);

        // Calculate workout statistics
        this.distance = this.calculateDistance();
        this.calories = this.calculateCalories();

        // Display workout statistics
        console.log('Distance:', this.distance);
        console.log('Calories:', this.calories);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  calculateDistance() {
    let totalDistance = 0;

    for (let i = 1; i < this.workoutPathCoordinates.length; i++) {
      const pos1 = this.workoutPathCoordinates[i - 1];
      const pos2 = this.workoutPathCoordinates[i];
      const lat1 = pos1.lat;
      const lon1 = pos1.lng;
      const lat2 = pos2.lat;
      const lon2 = pos2.lng;
      const earthRadius = 6371;
      const dLat = this.degreesToRadians(lat2 - lat1);
      const dLon = this.degreesToRadians(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.degreesToRadians(lat1)) *
          Math.cos(this.degreesToRadians(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadius * c;
      totalDistance += distance;
    }

    return totalDistance;
  }

  degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
  }

  calculateCalories() {
    if (this.weight === null) {
      return null;
    }

    const weight = this.weight;
    const averageSpeed = 5;
    const workoutDuration = 60;
    const caloriesBurned = (weight * averageSpeed * workoutDuration) / 60;

    return caloriesBurned;
  }
}
