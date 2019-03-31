export class Post {

  public title: string;
  public description: string;
  public pictures;

  constructor(title: string, description: string, pictures) {
    this.title = title;
    this.description = description;
    this.pictures = pictures;
  }

}
