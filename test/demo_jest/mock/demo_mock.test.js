import * as moduleWithMath from "./demo_moduleWithMath";
import * as math from "./demo_math";

describe('Test demo mock', () => {

    it('should return the input data', () => {
        const addMock = jest.spyOn(math, "add");

        // override the implementation
        addMock.mockImplementation(() => "mock");
        let addResult = moduleWithMath.doAdd(1, 2);
        console.log(`mock implementation result '${addResult}'`);
        expect(addResult).toEqual("mock");

        // restore the original implementation
        addMock.mockRestore();
        addResult = moduleWithMath.doAdd(1, 2);
        console.log(`mock restore result '${addResult}'`);
        expect(addResult).toEqual(3);
    });
});