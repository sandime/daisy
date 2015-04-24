/**
 * Created by SHERRI on 4/24/15.
 */
//runs the json
var app = angular.module("SightsApp", []);
app.service("sightsService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('sights.json').then(function (data){
        deferred.resolve(data);
    });
    this.getSights = function(){
        return deferred.promise;
    }
});
