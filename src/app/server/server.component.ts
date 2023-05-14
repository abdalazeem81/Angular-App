import { Component } from "@angular/core";
@Component({
selector : "app-server",
templateUrl : "./server.component.html",
styleUrls : ["./server.component.css"]
})
export class ServerComponent{
ServerId: number = 10;
ServerStatus: string = "OffLine";
ServerMsg: string = "I am a Message";
ServerCreationStatus = "No Server Was Created Yet.";
allowNewServer: boolean = false;
ServerName = "";
IsServerCreated = false;
GetServerMsg(){
    return this.ServerMsg;
}

constructor(){
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
}

// On Click Of Add New Server Button
OnServerCreation() {
    this.ServerCreationStatus = "Server Was Created Successfully!";
    this.IsServerCreated = true;
}

// On Input Value Change
OnServerNameChange(event:Event){
    this.ServerName = (<HTMLInputElement>event.target).value;
}

}