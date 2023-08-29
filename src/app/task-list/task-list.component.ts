import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date']);
    console.log(date);
  }


    tasks: Task[] = [
    new Task("Call Mom"), 
    new Task("Complete Blind 75"), 
    new Task("Call Dad"), 
    new Task("Go to the Gym"), 
    new Task("Wash the dishes")];
    

    add(newTask: string) {
      this.tasks.push(new Task(newTask))
    }

    remove(taskInd : Task) {
      var userConfirmed = confirm(`Are you sure you want to remove? \n "${taskInd.title}"`)
      if (userConfirmed) {
        this.tasks = this.tasks.filter(task => task != taskInd);
      }
    }

    

  }

  class Task {

    constructor(public title: string) {

    }

    toggleisDone() {
      this.isDone = !this.isDone;
    }

    public isDone = false;
  }

