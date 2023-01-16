import { Injectable } from '@angular/core';

import { QueryConfig } from '../interfaces/query-config.interface';

@Injectable({
  providedIn: 'root'
})
export class QueryConfigService {

  constructor() { }

  getBlankQuery(): QueryConfig {
    return {
      name: '',
      q: '',
      pageSize: 20,
      page: 1,
      first: 0,
    }
  }
}
