export enum Status {
  Online = 'Online',
  Offline = 'Offline',
  Busy = 'Busy',
  ApperOffline = 'AppearOffline',
  Away = 'Away',
  AppearOffline = "AppearOffline"
}

export interface User{
    nick: string;
    subnick?: string;
    age?: number;
    email: string;
    friend: boolean;
    uid: any;
    //
    active: boolean;
    status: Status;
}