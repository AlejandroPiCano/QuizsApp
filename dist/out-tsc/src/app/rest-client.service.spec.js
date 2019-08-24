import { TestBed } from '@angular/core/testing';
import { RestClientService } from './rest-client.service';
describe('RestClientService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RestClientService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rest-client.service.spec.js.map