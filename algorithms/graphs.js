const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

function person_is_seller (name) {
  return name[name.length-1]==='m';
}

function searchSeller () {
  let search_queue = graph['you'];
  const searched = [];
  while (search_queue.length) {
    let person = search_queue.shift();
    if (!searched.includes(person)) {
      if (person_is_seller(person)) {
        console.log(person + ' is a mango seller');
        return true;
      } else {
        search_queue+=graph[person];
        searched.push(person)
      }
    }
  }
  return false;
}

searchSeller('you');