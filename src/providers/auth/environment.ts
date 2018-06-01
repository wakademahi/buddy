import 'rxjs/add/operator/map';

export const environment = {
    //origin: 'http://97.74.234.178:8090/'
    origin: 'http://' + localStorage.getItem('domain') + '/'
};