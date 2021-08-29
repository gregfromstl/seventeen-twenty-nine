import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Submission } from '../models/submission';
import { Task_ } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  constructor(private firestore: AngularFirestore) {}

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
