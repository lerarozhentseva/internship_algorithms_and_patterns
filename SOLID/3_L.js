// Liskov Substitution Principle
// нужно правильно выбирать абстракции
class Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Member extends Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true;
}

class Frontend extends Member {
  canCreateFrontend() {
  }
}

class Backend extends Member {
  canCreateBackend() {
  }
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error('У тебя нет доступа')
  }
}

function openSecretDoor(member) {
  member.access()
}

openSecretDoor(new Frontend());