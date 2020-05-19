V=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
E = [ [1,2], [1,3],  [2,4],  [2,5],  [3,6],  [3,7],  [4,8]
    , [4,9], [5,10], [5,11], [6,12], [6,13], [7,14], [7,15] ]

/*
function parents(vertices){
    var accum=[]
    for(var i=0;i<E.length;i++){
        var edge=E[i]
        if(vertices.indexOf(edge[1])!==-1)
            accum.push(edge[0])
    }
    return accum
}
*/

parents=function(node){
    var res=[]
    for(var i=0;i<E.length;i++){
        var edge=E[i];
        if(edge[1]===node[0]){
            res.push(edge[0])
        }
    }
    return res
}
children=function(parent){
    var res=[]
    for(var j=0;j<parent.length;j++){
        for(var i=0;i<E.length;i++){
            var edge=E[i];
            if(edge[0]===parent[j]){
                res.push(edge[1])
            }
        }
    }
    return res
}
/*
parents  = (vertices) => E.reduce( (acc, [parent, child])=> vertices.includes(child)  ? acc.concat(parent) : acc , [] )
children = (vertices) => E.reduce( (acc, [parent, child])=> vertices.includes(parent) ? acc.concat(child)  : acc , [] )

parents  = function(x) { 
  return E.reduce(
  function(acc, e) {
       return ~x.indexOf(e[1]) ? acc.concat(e[0]) : acc 
    }, [] )
}
children = function(x) { return E.reduce(
  function(acc, e) { return ~x.indexOf(e[0]) ? acc.concat(e[1]) : acc }, [] )}
*/
//console.log(parents(parents([14])))
//console.log(children(children(children(parents(parents(parents([8])))))))
console.log(children(children((parents(parents([12]))))))