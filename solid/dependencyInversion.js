let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW-LEVEL NODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === `RelationshipBrowser`) {
      throw new Error('RelationshipBrowser is abstract!');
    }
  }

  findAllChildrenOf(name) {

  }
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child){
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child
    })
  }

  findAllChildrenOf(name) {
    return this.data.filter(r => 
      r.from.name === name &&
      r.type === Relationship.parent
    ).map(r => r.to);
  }
}

// HIGH-LEVEL MODULE
class Research {
  constructor(browser) {
    for(let p of browser.findAllChildrenOf('John')) {
      console.log(`John has a child called ${p.name}`);
    }
  }
}
// class Research {
//   constructor(Relationships) {
//     // find all children of John
//     let relations = Relationships.data;
//     for(let rel of relations.filter(r => 
//       r.from.name === 'John' &&
//       r.type === Relationship.parent
//     )) {
//       console.log(`john has a child name ${rel.to.name}`);
//     };
//   }
// }

let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);