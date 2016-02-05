/* jshint -W117, -W030 */
describe('dataservice', function() {
    describe('firebase', function() {
        beforeEach(function() {
            window.MockFirebase.override();
            
            module('firebase');
            module('app.core', bard.fakeToastr);
            bard.inject('$firebaseRef', '$rootScope', '$firebaseArray');
            
        });

        it('should return mock datas from firebaseRef', function() {
            $rootScope.$apply();
            bard.debugging(true);
            bard.log($firebaseArray($firebaseRef().child('people')));
            expect($firebaseArray($firebaseRef().child('people'))[0].name.is('Josh'));
            bard.debugging(false)
        });
    });
});
