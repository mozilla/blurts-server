"use strict";

const {vers, heartbeat} = require("../../controllers/dockerflow");

test("GET __version__ calls sendFile", () => {
    const mockRequest = {};
    const mockResponse = { sendFile: jest.fn() };

    vers(mockRequest, mockResponse);

    const mockSendFileCallArgs = mockResponse.sendFile.mock.calls[0];
    expect(mockSendFileCallArgs[0]).toContain("version.json");
});

test("GET __heartbeat__ calls send OK", () => {
    const mockRequest = {};
    const mockResponse = { send: jest.fn() };

    heartbeat(mockRequest, mockResponse);

    const mockSendCallArgs = mockResponse.send.mock.calls[0];
    expect(mockSendCallArgs[0]).toBe("OK");
});
