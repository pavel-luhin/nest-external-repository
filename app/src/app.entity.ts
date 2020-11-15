import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class AppEntity {

    @PrimaryGeneratedColumn()
    id: bigint;
}