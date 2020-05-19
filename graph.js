Store={}
Store.G={}

Store.graph=function(V,E){
    var graph=Object.create(Store.G)
    graph.edges=[]
    graph.vertices=[]
    graph.vertexIndex=[]
    graph.autoid=1

    if(Array.isArray(V)) graph.addVertices(V)
    if(Array.isArray(E)) graph.addEdges(E)

    return graph
}

Store.G.addVertices=function(vs){ vs.forEach(this.addVertex.bind(this))}
}