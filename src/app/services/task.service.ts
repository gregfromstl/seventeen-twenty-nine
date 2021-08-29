import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Task_ } from '../models/task';
import { Filter } from '../types/filter';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = new Subject<Task_[]>();
  private latestTasks: Task_[] = [];
  private taskFilters: Filter[] = [];

  constructor(private firestore: AngularFirestore) {
    this.fetchTasks().subscribe((tasks: Task_[]) => this.handleNewTasks(tasks));
  }

  setFilters(filters: Filter[]) {
    this.taskFilters = filters;
    this.sendTasks(this.latestTasks); // refresh task list
  }

  private handleNewTasks(tasks: Task_[]) {
    this.sendTasks(tasks);
    this.latestTasks = tasks; // track latest tasks for when filters change
  }

  refreshTasks() {
    // when a new component subscribes and needs tasks right away
    this.sendTasks(this.latestTasks);
  }

  private sendTasks(tasks: Task_[]) {
    const possiblyFilteredTasks = this.maybeFilterTasks(tasks);
    this.tasks.next(possiblyFilteredTasks);
  }

  private maybeFilterTasks(tasks: Task_[]): Task_[] {
    return this.taskFilters.includes(Filter.ALL)
      ? tasks
      : this.filterTasks(tasks, this.taskFilters);
  }

  private filterTasks(tasks: Task_[], filters: string[]): Task_[] {
    return tasks.filter((task) =>
      task.tags?.some((tag: string) => filters.includes(tag.toUpperCase()))
    );
  }

  private fetchTasks(): Observable<Task_[]> {
    var taskCollection: AngularFirestoreCollection<Task_> =
      this.firestore.collection('tasks');
    return taskCollection.valueChanges();
  }
}
