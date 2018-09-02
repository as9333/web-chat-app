import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { FormGroupName } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  genHeadersJSON() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  getUser(username:string) {
    return this.http.get('api/user', {
      params: {
        username: username
      }
    });
  }

  updateEmail(username:string, email:string) {
    let body = {
      'username': username,
      'email': email
    };
    return this.http.post(`api/email`, JSON.stringify(body), this.genHeadersJSON());
  }

  getGroups() {
    return this.http.get('api/groups');
  }

  createGroup(username:string, groupName:string) {
    let body = {
      'username': username,
      'groupName': groupName
    };
    return this.http.post('api/createGroup', JSON.stringify(body), this.genHeadersJSON());
  }

  removeGroup(groupName:string) {
    return this.http.delete('api/removeGroup/' + groupName);
  }

  createChannel(username:string, groupName:string, channelName:string) {
    let body = {
      'username': username,
      'groupName': groupName,
      'channelName': channelName
    };
    return this.http.post('api/channel/create', JSON.stringify(body), this.genHeadersJSON());
  }
}
