let titleElem = document.getElementById("title");
let priorityElem = document.getElementById("priority");
let colorElem = document.getElementById("color");
let description = document.getElementById("description");
let createReminderBtn = document.getElementById("createRemainderButton");
let showReminderBtn = document.getElementById("showRemainderButton");
let result = document.getElementById("result");
let reminders = [];

function Reminder(title, priority, color, description){
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}