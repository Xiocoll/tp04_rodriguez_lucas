import { Article } from "../models/article";

export class AddUser {
  static readonly type = "[Article] Add";
  constructor(public payload: Article) {}
}
export class DelUser {
  static readonly type = "[Article] Del";
  constructor(public payload: Article) {}
}
