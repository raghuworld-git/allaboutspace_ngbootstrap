import { Injectable } from '@angular/core';
import { RestGenericService } from '../../core/services/generic-rest-service/rest-generic.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CommonResponse } from '../../shared/models/common-response.model';
import { LaunchList } from '../../shared/models/launches/launch-list.model';
import { HttpParams } from '@angular/common/http';
import { LaunchDetail } from '../../shared/models/launches/launch-detail.model';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  private url: string;
  private endpoint = 'Launches';
  constructor(private restService: RestGenericService) {
    this.url = `${environment.LL2_BASE_URL}/${this.endpoint}`;
  }

  getUpcomingLaunchesList(
    limit: number = 8,
    offset: number = 10
  ): Observable<CommonResponse<LaunchList>> {
    let params = new HttpParams().set('limit', limit).set('offset', offset);
    return this.restService.getList<CommonResponse<LaunchList>>(
      `${this.url}/GetUpcomingLaunches`,
      params
    );
  }

  getPastLaunchesList(
    limit: number = 8,
    offset: number = 10
  ): Observable<CommonResponse<LaunchList>> {
    let params = new HttpParams().set('limit', limit).set('offset', offset);
    return this.restService.getList<CommonResponse<LaunchList>>(
      `${this.url}/GetPastLaunches`,
      params
    );
  }

  getLaunchDetails(id: string): Observable<LaunchDetail> {
    return this.restService.get<LaunchDetail>(`${this.url}/GetLaunchDetails`, id);
  }
}
