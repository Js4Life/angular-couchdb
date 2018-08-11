import { XyzUserListService } from './user-list.service';

import { TestBed, async, inject } from '@angular/core/testing';

describe("xyzUserListService",() => {
    let service:XyzUserListService;

    // Jasmine

    // without Async
        // beforeEach(() => {
        //     service = new XyzUserListService();

        // })

    // Using Async
    beforeEach(async() => {
        // service = new XyzUserListService();
        TestBed.configureTestingModule({
            providers:[XyzUserListService]
        })

    })

// waits 5 sec asyn call

// it('should return a user list with 16 user',(done) => {
//     service.get().then(response => {
//         expect(response.length).toBe(16);
//         done();
//     })
// })

// using Inject

it('should return a user list with 16 user',async(
    inject([XyzUserListService],(service:XyzUserListService) => {
        service.get().then(res => {
            expect(res.length).toBe(16);
        })
    }
     )
    )
)
} )
