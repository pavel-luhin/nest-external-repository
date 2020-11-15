import {AppEntity} from "./app.entity";
import {SimpleRepository} from "common-repo/dist/simple.repository";
import {EntityRepository} from "typeorm";

@EntityRepository(AppEntity)
export class AppRepository extends SimpleRepository<AppEntity> {

}