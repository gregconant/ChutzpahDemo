/// <reference path="../app/testablecode.js" />
// jasmine test
describe("will do some math on these numbers", function () {
    it("will add and then multiply", function () {

        var result = MyLibrary.businessLogic(2, 3);
        expect(result).toBe(30);
    });
});