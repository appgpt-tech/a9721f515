// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
export class booksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
Title: string;

@Column("integer",{nullable: true})
Author: number;

@Column("text",{nullable: true})
ISBN: string;

@Column("date",{nullable: true})
PublicationDate: Date;

@Column("text",{nullable: true})
Genre: string;


}
