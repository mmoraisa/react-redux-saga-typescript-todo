class Todo {
  private _id: string;
  private _title: string;
  private _description: string;

  constructor(id: string, title: string, description: string) {
    this._id = id;
    this._title = title;
    this._description = description;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }
}

export default Todo;
