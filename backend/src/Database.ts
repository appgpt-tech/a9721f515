//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { AlbumsEntity } from "./db/Albums.entity";
import { TracksEntity } from "./db/Tracks.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, AlbumsEntity, TracksEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Albums":[{"albumName":"The Dark Side of the Moon","genre":"Progressive rock","rating":5,"copiesSold":45000000},{"albumName":"Thriller","genre":"Pop","rating":5,"copiesSold":66000000},{"albumName":"The Bodyguard","genre":"R&B","rating":4,"copiesSold":45000000}],"Tracks":[{"trackName":"Beat It","duration":210,"album":"Thriller","lyrics":"They told him don't you ever...","rating":5},{"trackName":"I Will Always Love You","duration":275,"album":"The Bodyguard","lyrics":"If I should stay, I would only...","rating":4},{"trackName":"Money","duration":382,"album":"The Dark Side of the Moon","lyrics":"Money, get away...","rating":4}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("AlbumsEntity", data.Albums);
await this.SeedResource("TracksEntity", data.Tracks); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

