export class Topic {
    ID: Number;
    Title: String;
    Description: Text;
    Image: String;
    Slug: File;
    CreateDate: Date;
    ModificationDate: Date;

    constructor(ID, Title, Description, Image, Slug, CreateDate, ModificationDate){
        this.ID = ID;
        this.Title = Title;
        this.Description = Description;
        this.Image = Image;
        this.Slug = Slug;
        this.CreateDate = CreateDate;
        this.ModificationDate = ModificationDate;
    }
}