// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("projects")
export class projectsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
projectName: string;

@Column("text",{nullable: true})
description: string;

@Column("date",{nullable: true})
startDate: Date;

@Column("date",{nullable: true})
endDate: Date;

@Column("text",{nullable: true})
status: string;


}
