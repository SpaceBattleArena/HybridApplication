export class Card {
    ID: Number;
    Name: String;
    Sprite: File;
    Faction: String;
    Type: String;
    ATK: Number;
    Cost: Number;
    HP: Number;
    Rarity_id: Number;
    Number: number;

    constructor(ID, Name, Sprite, Faction, Type, ATK, Cost, HP, Rarity_id, number){
        this.ID = ID;
        this.Name = Name;
        this.Sprite = Sprite;
        this.Faction = Faction;
        this.Type = Type;
        this.ATK = ATK;
        this.Cost = Cost;
        this.HP = HP;
        this.Rarity_id = Rarity_id;
        this.Number = number;
    }
}