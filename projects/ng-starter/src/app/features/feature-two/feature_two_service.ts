import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { getDummyDataNumbers } from '../../core/util/constants';

@Injectable()
export class FeatureTwoService {
  constructor() {}

  fetchProduct(): Observable<number> {
    return getDummyDataNumbers().pipe(
      map((values) => values.reduce((acc, value) => (acc = acc * value), 1))
    );
  }
}
