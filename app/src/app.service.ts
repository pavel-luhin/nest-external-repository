import { Injectable } from '@nestjs/common';
import {AppRepository} from "./app.repository";

@Injectable()
export class AppService {

  constructor(
      private readonly repository: AppRepository
  ) {
  }
}
