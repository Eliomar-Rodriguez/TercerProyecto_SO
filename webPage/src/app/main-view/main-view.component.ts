import { Component, OnInit } from "@angular/core";
import { BackendService } from "../backend.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.css"]
})
export class MainViewComponent implements OnInit {
  Object = Object;
  Contador = 0;
  maxCounter = 10000;
  userInfo;
  constructor(private _Backend: BackendService, private _Router: Router) {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (this.userInfo === null) {
      this._Router.navigate([""]);
    }
    this._Backend.getUsers();
    this._Backend.getChats(this.userInfo.id);
  }
  activeUser = "";
  selectUser(user) {
    if (this._Backend.users[user].text === undefined) {
      this._Backend.users[user].text = "";
    }
    this.activeUser = user;
    this._Backend.getChat(this.userInfo.id, this.activeUser);
    this.scroll();
  }
  send() {
    this._Backend.sendMsg(
      this.userInfo.id,
      this.activeUser,
      this._Backend.users[this.activeUser].text
    );
    this._Backend.users[this.activeUser].text = "";
  }
  sendLot(C) {
    for (let index = 0; index < C; index++) {
      this._Backend.sendMsg(
        this.userInfo.id,
        this.activeUser,
        "Message #" + (index + 1) + ", " + new Date().toLocaleString()
      );
      if (index == C - 1) this.scroll();
    }
  }
  scroll() {
    const chatLog = document.getElementById("chatLog");
    if (chatLog != null) {
      document.getElementById("chatLog").scrollTop = document.getElementById(
        "chatLog"
      ).scrollHeight;
    }
  }
  ngOnInit() {}
}
