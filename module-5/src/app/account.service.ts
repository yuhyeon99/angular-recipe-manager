import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

/**
 * @injectable 서비스에 다른 서비스를 주입하려면 해당 데코레이터를 추가해주어야함.
 */
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}