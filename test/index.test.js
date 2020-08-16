"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../lib/index");
const core_1 = require("@aws-cdk/core");
require("@aws-cdk/assert/jest");
test('create the HTTP API', () => {
    const mockApp = new core_1.App();
    const stack = new core_1.Stack(mockApp, 'testing-stack');
    new index_1.ServerlessApi(stack, 'testing');
    expect(stack).toHaveResource('AWS::ApiGatewayV2::Api', {
        ProtocolType: 'HTTP',
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFDN0Msd0NBQTJDO0FBQzNDLGdDQUE4QjtBQUU5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLE1BQU0sT0FBTyxHQUFHLElBQUksVUFBRyxFQUFFLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFLLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRWxELElBQUkscUJBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsRUFBRTtRQUNyRCxZQUFZLEVBQUUsTUFBTTtLQUNyQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlcmxlc3NBcGkgfSBmcm9tICcuLi9saWIvaW5kZXgnO1xuaW1wb3J0IHsgQXBwLCBTdGFjayB9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICdAYXdzLWNkay9hc3NlcnQvamVzdCc7XG5cbnRlc3QoJ2NyZWF0ZSB0aGUgSFRUUCBBUEknLCAoKSA9PiB7XG4gIGNvbnN0IG1vY2tBcHAgPSBuZXcgQXBwKCk7XG4gIGNvbnN0IHN0YWNrID0gbmV3IFN0YWNrKG1vY2tBcHAsICd0ZXN0aW5nLXN0YWNrJyk7XG5cbiAgbmV3IFNlcnZlcmxlc3NBcGkoc3RhY2ssICd0ZXN0aW5nJyk7XG5cbiAgZXhwZWN0KHN0YWNrKS50b0hhdmVSZXNvdXJjZSgnQVdTOjpBcGlHYXRld2F5VjI6OkFwaScsIHtcbiAgICBQcm90b2NvbFR5cGU6ICdIVFRQJyxcbiAgfSk7XG59KTtcblxuXG5cbiJdfQ==