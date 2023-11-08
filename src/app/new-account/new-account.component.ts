import { Component } from '@angular/core';
// import {LoggingService} from "../services/logging.service";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountService)
  {
    this.accountService.statusUpdated.subscribe((status: string) => alert('New Status: ' + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
