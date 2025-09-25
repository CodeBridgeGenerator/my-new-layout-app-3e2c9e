const assert = require("assert");
const app = require("../../src/app");

describe("documentStorages service", () => {
  let thisService;
  let documentStorageCreated;

  beforeEach(async () => {
    thisService = await app.service("documentStorages");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (documentStorages)");
  });

  describe("#create", () => {
    const options = {"name":"new value","size":23,"path":"new value","lastModifiedDate":1758786595287,"lastModified":23,"eTag":"new value","versionId":"new value","url":"new value","tableId":"new value","tableName":"new value"};

    beforeEach(async () => {
      documentStorageCreated = await thisService.create(options);
    });

    it("should create a new documentStorage", () => {
      assert.strictEqual(documentStorageCreated.name, options.name);
assert.strictEqual(documentStorageCreated.size, options.size);
assert.strictEqual(documentStorageCreated.path, options.path);
assert.strictEqual(documentStorageCreated.lastModifiedDate, options.lastModifiedDate);
assert.strictEqual(documentStorageCreated.lastModified, options.lastModified);
assert.strictEqual(documentStorageCreated.eTag, options.eTag);
assert.strictEqual(documentStorageCreated.versionId, options.versionId);
assert.strictEqual(documentStorageCreated.url, options.url);
assert.strictEqual(documentStorageCreated.tableId, options.tableId);
assert.strictEqual(documentStorageCreated.tableName, options.tableName);
    });
  });

  describe("#get", () => {
    it("should retrieve a documentStorage by ID", async () => {
      const retrieved = await thisService.get(documentStorageCreated._id);
      assert.strictEqual(retrieved._id, documentStorageCreated._id);
    });
  });

  describe("#update", () => {
    let documentStorageUpdated;
    const options = {"name":"updated value","size":100,"path":"updated value","lastModifiedDate":null,"lastModified":100,"eTag":"updated value","versionId":"updated value","url":"updated value","tableId":"updated value","tableName":"updated value"};

    beforeEach(async () => {
      documentStorageUpdated = await thisService.update(documentStorageCreated._id, options);
    });

    it("should update an existing documentStorage ", async () => {
      assert.strictEqual(documentStorageUpdated.name, options.name);
assert.strictEqual(documentStorageUpdated.size, options.size);
assert.strictEqual(documentStorageUpdated.path, options.path);
assert.strictEqual(documentStorageUpdated.lastModifiedDate, options.lastModifiedDate);
assert.strictEqual(documentStorageUpdated.lastModified, options.lastModified);
assert.strictEqual(documentStorageUpdated.eTag, options.eTag);
assert.strictEqual(documentStorageUpdated.versionId, options.versionId);
assert.strictEqual(documentStorageUpdated.url, options.url);
assert.strictEqual(documentStorageUpdated.tableId, options.tableId);
assert.strictEqual(documentStorageUpdated.tableName, options.tableName);
    });
  });

  describe("#delete", () => {
  let documentStorageDeleted;
    beforeEach(async () => {
      documentStorageDeleted = await thisService.remove(documentStorageCreated._id);
    });

    it("should delete a documentStorage", async () => {
      assert.strictEqual(documentStorageDeleted._id, documentStorageCreated._id);
    });
  });
});