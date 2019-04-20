// add solution here

function theBeatlesPlay(musicians, instruments){
  var result = []
  for(i=0;i<4;i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}