import { Injectable } from '@angular/core';
import { WsCallback } from 'src/app/util/ws-callback';
import { HttpClient } from '@angular/common/http';
import { ServiceUrls } from 'src/app/util/service-urls';
import { WsResponse } from 'src/app/util/ws-response';
import { WsType } from 'src/app/util/ws-type';
import { LoadingService } from 'src/app/util/loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService) { }

  getPapers(callBack: WsCallback){     
    this.loadingService.showLoading("Loading", WsType.GET_ALL_PAPERS);
    let url = ServiceUrls.GET_PAPERS;
    this.http.get(url).subscribe(data =>{
      var modified = JSON.parse(JSON.stringify(data));
					var res = new WsResponse(modified);
					callBack.onSuccess(res, WsType.GET_ALL_PAPERS);
    },
    error => {
      var modified = JSON.parse(JSON.stringify(error));
      var res = new WsResponse(modified);
      callBack.onFail(res, WsType.GET_ALL_PAPERS);
    });
  }
}
