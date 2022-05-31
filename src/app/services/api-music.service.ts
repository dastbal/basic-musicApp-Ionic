import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiMusicService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    return this.http.get(
      'https://platzi-music-api.herokuapp.com/browse/new-releases'
    );
  }
  getArtistsTopTracks(artistId) {
    return this.http.get(
      `https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`
    );
  }
}
