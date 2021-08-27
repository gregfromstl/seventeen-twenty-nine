import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task_ } from '../models/task';
import { Submission } from '../models/submission';

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

  async addSubmission(
    submission: Submission,
    existingSubmissions: Submission[],
    task_id: string
  ): Promise<boolean> {
    const doc = this.firestore.doc<Task_>(`tasks/${task_id}`);
    return await doc
      .update({
        submissions: [...existingSubmissions, submission],
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  }
}
