"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
describe('ts-jest', () => {
    test('should be able to import ts files from outside the project root', () => {
        expect(common_1.greeting).toBe('hello');
    });
});
//# sourceMappingURL=main.spec.js.map