// Source code generated by AppGPT (www.appgpt.tech)

 //Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { booksEntity } from "./db/books.entity";
import { authorsEntity } from "./db/authors.entity";
import { membersEntity } from "./db/members.entity";
import { loansEntity } from "./db/loans.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, booksEntity, authorsEntity, membersEntity, loansEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"books":[{"Title":"Title 1","Author":1,"ISBN":"ISBN 1","PublicationDate":"2025-03-27T03:01:02.928Z","Genre":"Genre 1","id":34},{"Title":"Title 2","Author":2,"ISBN":"ISBN 2","PublicationDate":"2024-10-06T05:27:27.187Z","Genre":"Genre 2","id":47},{"Title":"Title 3","Author":3,"ISBN":"ISBN 3","PublicationDate":"2023-04-12T10:49:55.843Z","Genre":"Genre 3","id":76},{"Title":"Title 4","Author":4,"ISBN":"ISBN 4","PublicationDate":"2024-11-07T03:23:56.794Z","Genre":"Genre 4","id":83},{"Title":"Title 5","Author":5,"ISBN":"ISBN 5","PublicationDate":"2023-10-22T22:11:42.967Z","Genre":"Genre 5","id":52}],"authors":[{"Name":"Name 1","Biography":"Biography 1","DateOfBirth":"2024-10-04T00:00:25.385Z","Nationality":"Nationality 1","id":5},{"Name":"Name 2","Biography":"Biography 2","DateOfBirth":"2024-01-22T01:51:58.425Z","Nationality":"Nationality 2","id":60},{"Name":"Name 3","Biography":"Biography 3","DateOfBirth":"2023-09-10T13:56:24.337Z","Nationality":"Nationality 3","id":73},{"Name":"Name 4","Biography":"Biography 4","DateOfBirth":"2024-01-04T12:06:36.767Z","Nationality":"Nationality 4","id":27},{"Name":"Name 5","Biography":"Biography 5","DateOfBirth":"2023-06-04T10:43:32.493Z","Nationality":"Nationality 5","id":68}],"members":[{"MemberID":"MemberID 1","Name":"Name 1","EmailAddress":"EmailAddress 1","PhoneNumber":"PhoneNumber 1","Address":"Address 1","MembershipStartDate":"2023-04-15T20:55:48.390Z","id":22},{"MemberID":"MemberID 2","Name":"Name 2","EmailAddress":"EmailAddress 2","PhoneNumber":"PhoneNumber 2","Address":"Address 2","MembershipStartDate":"2023-07-26T11:02:15.376Z","id":33},{"MemberID":"MemberID 3","Name":"Name 3","EmailAddress":"EmailAddress 3","PhoneNumber":"PhoneNumber 3","Address":"Address 3","MembershipStartDate":"2023-09-11T12:18:02.195Z","id":11},{"MemberID":"MemberID 4","Name":"Name 4","EmailAddress":"EmailAddress 4","PhoneNumber":"PhoneNumber 4","Address":"Address 4","MembershipStartDate":"2023-06-24T19:10:51.333Z","id":94},{"MemberID":"MemberID 5","Name":"Name 5","EmailAddress":"EmailAddress 5","PhoneNumber":"PhoneNumber 5","Address":"Address 5","MembershipStartDate":"2024-02-05T16:36:23.369Z","id":17}],"loans":[{"LoanID":"LoanID 1","Book":1,"Member":1,"LoanDate":"2025-03-18T11:49:47.235Z","DueDate":"2024-02-14T14:34:35.058Z","ActualReturnDate":"2023-11-13T16:47:22.727Z","id":22},{"LoanID":"LoanID 2","Book":2,"Member":2,"LoanDate":"2023-11-02T22:12:10.469Z","DueDate":"2023-06-05T20:29:15.174Z","ActualReturnDate":"2023-11-21T07:20:07.147Z","id":15},{"LoanID":"LoanID 3","Book":3,"Member":3,"LoanDate":"2025-02-05T01:05:34.107Z","DueDate":"2023-10-11T12:04:01.894Z","ActualReturnDate":"2024-11-09T16:27:55.491Z","id":72},{"LoanID":"LoanID 4","Book":4,"Member":4,"LoanDate":"2025-02-14T19:55:22.961Z","DueDate":"2024-05-18T10:57:37.995Z","ActualReturnDate":"2024-01-26T16:24:17.285Z","id":81},{"LoanID":"LoanID 5","Book":5,"Member":5,"LoanDate":"2024-12-13T05:04:31.335Z","DueDate":"2025-03-16T22:47:23.303Z","ActualReturnDate":"2024-09-06T18:13:54.137Z","id":90}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("booksEntity", data.books);
await this.SeedResource("authorsEntity", data.authors);
await this.SeedResource("membersEntity", data.members);
await this.SeedResource("loansEntity", data.loans); 
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

