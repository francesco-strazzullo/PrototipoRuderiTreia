'use strict';

angular.module('ruderiTreia001App')
        .service('housesRepository', ['$q', function($q) {

                var that = this;

                this.data = JSON.parse('[{"id":0,"price":249635,"picture":"rudere0.jpg","mq":120,"address":"Vanderbilt Street nr. 65 Treia","title":"casolare antico","description":"Sint sunt ipsum culpa ad mollit consectetur eu veniam elit. Est sunt reprehenderit in esse culpa duis ullamco duis irure quis. Laboris exercitation mollit in quis in irure est minim proident eu commodo sunt. Aliquip labore aute proident sit mollit quis eu. Laboris et est eu tempor non aliquip proident esse ut est fugiat ad velit."},{"id":1,"price":105990,"picture":"rudere1.jpg","mq":120,"address":"Lake Place nr. 25 Treia","title":"rudere rustico","description":"Ipsum nulla in minim incididunt Lorem veniam dolore amet est qui irure quis labore pariatur. Sit ut ipsum esse tempor fugiat est culpa officia qui est do ut. Exercitation occaecat mollit amet commodo quis. Aliquip elit Lorem occaecat cupidatat culpa labore fugiat irure laboris eiusmod voluptate. Amet proident non officia ad eiusmod fugiat tempor labore."},{"id":2,"price":103004,"picture":"rudere2.jpg","mq":159,"address":"Colonial Court nr. 72 Treia","title":"casolare di campagna","description":"Laboris tempor id et amet dolore aliqua nisi in ut. Eu dolore nisi non esse amet esse esse eu. Occaecat nisi ipsum excepteur commodo non commodo do do. Qui elit fugiat laborum eiusmod eu ullamco duis ea id ea elit. Ea tempor elit id dolore deserunt."},{"id":3,"price":271377,"picture":"rudere3.jpg","mq":192,"address":"Jefferson Avenue nr. 79 Treia","title":"rudere antico","description":"Esse irure aute ipsum amet laboris nulla incididunt proident. In et quis tempor est qui enim deserunt Lorem officia culpa. Irure sunt labore id commodo et magna consectetur adipisicing. Duis nostrud Lorem nisi ex quis commodo fugiat est amet duis dolore consectetur duis. Voluptate nulla ad dolore sint sint."},{"id":4,"price":133736,"picture":"rudere4.jpg","mq":128,"address":"Ditmas Avenue nr. 39 Treia","title":"casolare rustico","description":"Elit cillum esse mollit irure. Culpa veniam adipisicing cupidatat fugiat adipisicing ad elit elit sint eu elit esse do. Amet do anim non anim fugiat est. Mollit sit ea officia consectetur do anim ut. Tempor amet aliqua culpa do enim consequat."}]');

                return {
                    list: function() {
                        var promise;
                        var deferred = $q.defer();
                        promise = deferred.promise;
                        deferred.resolve(that.data);

                        return promise;
                    },
                    get: function(id){
                        
                        var intId = parseInt(id,10);
                        
                        var house = _.find(that.data,function(h){
                            return h.id === intId;
                        });
                        
                        var promise;
                        var deferred = $q.defer();
                        promise = deferred.promise;
                        deferred.resolve(house);
                        
                        return promise;
                    },
                    listAssets: function(id){
                        
                        var promise;
                        var deferred = $q.defer();
                        var dummyAssets = [
                            {
                                id:0,
                                name:'restauro',
                                price:10000
                            },
                            {
                                id:1,
                                name:'piscina',
                                price:20000
                            },
                            {
                                id:2,
                                name:'veranda',
                                price:5000
                            },{
                                id:3,
                                name:'mansarda',
                                price:2000
                            },
                            {
                                id:4,
                                name:'balconi',
                                price:10000
                            }
                        ];
                        
                        promise = deferred.promise;
                        deferred.resolve(dummyAssets);
                        
                        return promise;
                        
                    }
                };
            }]);

