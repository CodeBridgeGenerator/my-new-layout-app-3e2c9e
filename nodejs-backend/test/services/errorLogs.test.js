const assert = require("assert");
const app = require("../../src/app");

describe("errorLogs service", () => {
  let thisService;
  let errorLogCreated;

  beforeEach(async () => {
    thisService = await app.service("errorLogs");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (errorLogs)");
  });

  describe("#create", () => {
    const options = {"serviceName":"new value","errorMessage":"new value","message":"new value","stack":"new value","details":"new value"};

    beforeEach(async () => {
      errorLogCreated = await thisService.create(options);
    });

    it("should create a new errorLog", () => {
      assert.strictEqual(errorLogCreated.serviceName, options.serviceName);
assert.strictEqual(errorLogCreated.errorMessage, options.errorMessage);
assert.strictEqual(errorLogCreated.message, options.message);
assert.strictEqual(errorLogCreated.stack, options.stack);
assert.strictEqual(errorLogCreated.details, options.details);
    });
  });

  describe("#get", () => {
    it("should retrieve a errorLog by ID", async () => {
      const retrieved = await thisService.get(errorLogCreated._id);
      assert.strictEqual(retrieved._id, errorLogCreated._id);
    });
  });

  describe("#update", () => {
    let errorLogUpdated;
    const options = {"serviceName":"updated value","errorMessage":"updated value","message":"updated value","stack":"updated value","details":"updated value"};

    beforeEach(async () => {
      errorLogUpdated = await thisService.update(errorLogCreated._id, options);
    });

    it("should update an existing errorLog ", async () => {
      assert.strictEqual(errorLogUpdated.serviceName, options.serviceName);
assert.strictEqual(errorLogUpdated.errorMessage, options.errorMessage);
assert.strictEqual(errorLogUpdated.message, options.message);
assert.strictEqual(errorLogUpdated.stack, options.stack);
assert.strictEqual(errorLogUpdated.details, options.details);
    });
  });

  describe("#delete", () => {
  let errorLogDeleted;
    beforeEach(async () => {
      errorLogDeleted = await thisService.remove(errorLogCreated._id);
    });

    it("should delete a errorLog", async () => {
      assert.strictEqual(errorLogDeleted._id, errorLogCreated._id);
    });
  });
});