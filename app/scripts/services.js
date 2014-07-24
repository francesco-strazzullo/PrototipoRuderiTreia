'use strict';

angular.module('ruderiTreia001App')
        .service('housesRepository', ['$q', function($q) {

                var that = this;

                this.data = JSON.parse('[{"id":0,"picture":"rudere0.jpg","mq":165,"address":"Grove Place nr. 26 Treia","title":"casolare antico","description":"Laborum anim et laboris labore irure Lorem sit proident. Ad officia nostrud do incididunt dolor commodo tempor in sit occaecat laborum. Eu nisi eu et aliquip est enim dolore nostrud cupidatat dolor ut. Nisi in nostrud eu commodo in laborum proident fugiat amet. Sint exercitation sint id duis ex."},{"id":1,"picture":"rudere1.jpg","mq":153,"address":"Williams Place nr. 42 Treia","title":"rudere rustico","description":"Culpa duis laborum ad veniam voluptate duis. Anim consequat elit ullamco ea commodo. Cupidatat irure culpa irure esse ipsum sint culpa aliquip. Nisi ullamco commodo ad reprehenderit enim ex irure officia. Duis pariatur cupidatat cillum irure aliqua tempor consequat ea voluptate excepteur."},{"id":2,"picture":"rudere2.jpg","mq":141,"address":"Vandervoort Place nr. 89 Treia","title":"casolare di campagna","description":"Nisi ex proident eu sit excepteur aliqua aliqua velit qui tempor dolor tempor eu ut. Adipisicing qui do ea commodo et labore ullamco pariatur dolor duis aliquip consectetur. Aute enim occaecat deserunt duis laborum exercitation in. Do cupidatat commodo minim nostrud veniam proident aute elit. Duis laborum irure ipsum dolore."},{"id":3,"picture":"rudere3.jpg","mq":150,"address":"Forbell Street nr. 43 Treia","title":"rudere antico","description":"Dolore sunt sunt ullamco minim in elit enim pariatur deserunt. Duis do ullamco sunt esse nulla consequat proident reprehenderit. Voluptate minim pariatur ad sit sint ullamco Lorem enim duis fugiat voluptate ullamco excepteur ipsum. Aliquip excepteur esse do dolore fugiat. Reprehenderit qui esse reprehenderit ullamco dolore est exercitation eiusmod."},{"id":4,"picture":"rudere4.jpg","mq":239,"address":"Bartlett Street nr. 15 Treia","title":"casolare rustico","description":"Et consequat adipisicing culpa sunt nostrud mollit laboris ipsum sunt mollit exercitation adipisicing deserunt. Eu esse laborum enim consequat excepteur duis ex exercitation. Et excepteur irure aliqua occaecat dolor amet culpa eu incididunt sint. Nulla ex magna aute esse fugiat velit sunt veniam aliquip Lorem aute. Consectetur qui laboris commodo amet ea non incididunt deserunt."}]');

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
                    }
                };
            }]);

