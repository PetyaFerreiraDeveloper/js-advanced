const { Repository } = require("./solution.js");
const { expect } = require("chai");

describe("repository class tests", () => {
  let properties = {
    name: "string",
    age: "number",
    birthday: "object",
  };
  let entity = {
    name: "Pesho",
    age: 22,
    birthday: new Date(1998, 0, 7),
  };
  let clonedEntity = {
    name: "Pesho",
    age: 22,
    birthday: new Date(1998, 0, 7),
  };

  describe("Initialization", () => {
    it("Should add props property on init", () => {
      let repository = new Repository(properties);

      expect(repository).to.have.property("props");
      expect(repository.props).to.deep.equal(properties);
      expect(typeof repository.props).to.equal("object");
    });

    it("Should have property data on init", () => {
      let repository = new Repository(properties);

      expect(repository).to.have.property("data");
      expect(typeof repository.data).is.equal("object");
      expect(repository.data).instanceOf(Map);
    });

    it("Should have a nextId function on init", () => {
      let repo = new Repository(properties);

      expect(repo).to.have.property("nextId");
      expect(typeof repo.nextId).to.equal("function");
      expect(repo.nextId()).to.equal(0);
    });
  });

  describe("Add entity", () => {
    it("should return incremented id if valid entity is added in the map", () => {
      let repository = new Repository(properties);

      expect(repository.add(entity)).to.equal(0);
      expect(repository.add(entity)).to.equal(1);
    });

    it("Should store valid entity in data map", () => {
      let repository = new Repository(properties);

      repository.add(entity);

      expect(repository.data.get(0)).not.to.be.undefined;
      expect(repository.data.get(0))
        .to.have.property("name")
        .that.equals("Pesho");
      expect(repository.data.get(0)).to.have.property("age").that.equals(22);
      expect(repository.data.get(0)).to.have.property("birthday");
    });

    it("Should throw error if property birthday is missing", () => {
      let repository = new Repository(properties);
      let entity = {
        name: "Pesho",
        age: 22,
      };

      expect(() => repository.add(entity)).to.throw(
        Error,
        `Property birthday is missing from the entity!`
      );
    });

    it("Should throw error if property age is missing", () => {
      let repository = new Repository(properties);
      let entity = {
        name: "Pesho",
        birthday: new Date(1998, 0, 7),
      };

      expect(() => repository.add(entity)).to.throw(
        Error,
        `Property age is missing from the entity!`
      );
    });
    it("Should throw error if property name is missing", () => {
      let repository = new Repository(properties);
      let entity = {
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      expect(() => repository.add(entity)).to.throw(
        Error,
        `Property name is missing from the entity!`
      );
    });

    it("Should throw error if property has incorrect type", () => {
      let repository = new Repository(properties);
      let entity = {
        name: "Pesho",
        age: 22,
        birthday: "1998-01-06T22:00:00.000Z",
      };
      expect(() => repository.add(entity)).to.throw(
        Error,
        "Property birthday is not of correct type!"
      );
    });
  });

  describe("Get count", () => {
    it("Should return the number of entities", () => {
      let repository = new Repository(properties);

      repository.add(entity);
      repository.add(entity);
      repository.add(entity);

      expect(repository.count).is.equal(3);
    });

    it("Should return zero if no entities are added", () => {
      let repository = new Repository(properties);

      expect(repository.count).is.equal(0);
    });
  });

  describe("Get id", () => {
    it("Should return entity by id", () => {
      let repository = new Repository(properties);

      repository.add(entity);

      expect(repository.getId(0)).to.deep.equal(clonedEntity);
    });

    it("Should throw error when no id is found", () => {
      let repository = new Repository(properties);

      expect(() => repository.getId(15)).to.throw(
        Error,
        "Entity with id: 15 does not exist!"
      );
    });

    it("Should throw error if invalid id is given", () => {
      let repository = new Repository(properties);

      expect(() => repository.getId("test")).to.throw(
        Error,
        "Entity with id: test does not exist!"
      );
      expect(() => repository.getId(-3.5)).to.throw(
        Error,
        "Entity with id: -3.5 does not exist!"
      );
    });
  });
  describe("update", () => {
    it("Should update one valid entity with another", () => {
      let newEntity = {
        name: "Gosho",
        age: 32,
        birthday: new Date(1999, 0, 7),
      };

      let repo = new Repository(properties);

      repo.add(entity);
      repo.update(0, newEntity);

      expect(repo.getId(0).name).to.equal("Gosho");
    });

    it("Should return error if entity with this id does not exist", () => {
      let repo = new Repository(properties);

      expect(() => repo.update(2, entity)).to.throw(
        Error,
        "Entity with id: 2 does not exist!"
      );
    });
    it("Should validate when updating", () => {
      let invalidEntity1 = {
        age: 22,
        birthday: new Date(1998, 0, 7),
      };
      let invalidEntity2 = {
        name: "Pesho",
        birthday: new Date(1998, 0, 7),
      };

      let invalidEntity3 = {
        name: "Pesho",
        age: 22,
      };

      let repo = new Repository(properties);
      repo.add(entity);

      expect(() => repo.update(0, invalidEntity1)).to.throw(
        Error,
        `Property name is missing from the entity!`
      );
      expect(() => repo.update(0, invalidEntity2)).to.throw(
        Error,
        `Property age is missing from the entity!`
      );
      expect(() => repo.update(0, invalidEntity3)).to.throw(
        Error,
        `Property birthday is missing from the entity!`
      );
    });
  });

  describe("delete", () => {
    it("should delete the entity with given id", () => {
      let repo = new Repository(properties);

      repo.add(entity);
      repo.add(entity);
      repo.del(1);

      expect(repo.count).to.equal(1);
    });

    it("should return error if id does not exist", () => {
      let repo = new Repository(properties);
      repo.add(entity);

      expect(() => repo.del(2)).to.throw(
        Error,
        "Entity with id: 2 does not exist!"
      );
    });

    it("should return error if id does not exist", () => {
      let repo = new Repository(properties);
      repo.add(entity);

      expect(() => repo.del(2)).to.throw(
        Error,
        "Entity with id: 2 does not exist!"
      );
      expect(() => repo.del("test")).to.throw(
        Error,
        "Entity with id: test does not exist!"
      );
      expect(() => repo.del(-1.7)).to.throw(
        Error,
        "Entity with id: -1.7 does not exist!"
      );
    });

    it("Should have count ot 0 if add and remove multiple entities", () => {
      let repo = new Repository(properties);

      repo.add(entity);
      repo.add(entity);
      expect(repo.count).to.equal(2);
      repo.del(1);
      expect(repo.count).to.equal(1);
      repo.del(0);
      expect(repo.count).to.equal(0);
    });
  });
});
