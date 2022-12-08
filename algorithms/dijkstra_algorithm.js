const graph = {};
graph.start = {};
graph.start.a=6;
graph.start.b=2;

graph.a = {};
graph.a.fin=1;

graph.b = {};
graph.b.a=3;
graph.b.fin=5;

graph.fin = {};

const costs = {}; //хеш-таблица стоимостей
costs.a=6;
costs.b=2;
costs.fin=Infinity;

const parents = {}; //хеш-таблица родителей
parents.a='start';
parents.b='start';
parents.in=null;

const processed = []; //массив обработанных узлов


const findLowestCostNode = (costs) => {
  let lowest_cost = Infinity;
  let lowest_cost_node=null;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowest_cost && !processed.includes(node)) {
      lowest_cost = cost;
      lowest_cost_node = node;
    }
  })
  return lowest_cost;
}

let node = findLowestCostNode(costs);
while (node !== null) {
  let cost = costs[node];
  let neighbors = graph[node];

  Object.keys(neighbors).forEach((n) => {
    let new_cost = cost+neighbors[n];
    if (costs[n] > new_cost) {
      costs[n] = new_cost;
      parents[n] = node;
    }
  })
  processed.push(node);
  node=findLowestCostNode(costs);
}

console.log(costs);