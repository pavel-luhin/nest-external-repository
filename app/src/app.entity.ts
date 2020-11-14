import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('app')
export class AppEntity {

    @PrimaryGeneratedColumn()
    id: bigint;
}