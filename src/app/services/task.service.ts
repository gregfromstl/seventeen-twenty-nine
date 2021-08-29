import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable, of, Subject } from 'rxjs';
import { Task_ } from '../models/task';
import { Submission } from '../models/submission';
import { Filter } from '../types/filter';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = new Subject<Task_[]>();
  latestTasks: Task_[] = [];
  taskFilters: Filter[] = [];

  constructor(private firestore: AngularFirestore) {
    this.getTasks().subscribe((tasks) => this.handleNewTasks(tasks));
  }

  setFilters(filters: Filter[]) {
    this.taskFilters = filters;
    this.sendTasks(this.latestTasks); // refresh task list
  }

  handleNewTasks(tasks: Task_[]) {
    this.sendTasks(tasks);
    this.latestTasks = tasks; // track latest tasks for when filters change
  }

  refreshTasks() {
    // when a new component subscribes and needs tasks right away
    this.sendTasks(this.latestTasks);
  }

  sendTasks(tasks: Task_[]) {
    const possiblyFilteredTasks = this.maybeFilterTasks(tasks);
    this.tasks.next(possiblyFilteredTasks);
  }

  maybeFilterTasks(tasks: Task_[]): Task_[] {
    return this.taskFilters.includes(Filter.ALL)
      ? tasks
      : this.filterTasks(tasks, this.taskFilters);
  }

  filterTasks(tasks: Task_[], filters: string[]): Task_[] {
    return tasks.filter((task) =>
      task.tags?.some((tag: string) => filters.includes(tag.toUpperCase()))
    );
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

  getTasks(): Observable<Task_[]> {
    var taskCollection: AngularFirestoreCollection<Task_> =
      this.firestore.collection('tasks');
    return taskCollection.valueChanges();
  }
}
