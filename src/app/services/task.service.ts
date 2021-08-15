import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task_ } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task_[] = [];

  constructor(private firestore: AngularFirestore) {}

  getTasks(): Observable<Task_[]> {
    var taskCollection: AngularFirestoreCollection<Task_> =
      this.firestore.collection('tasks');
    return taskCollection.valueChanges();
  }
}
