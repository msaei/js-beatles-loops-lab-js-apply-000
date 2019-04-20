// add solution here

theBeatlesPlay(musicians, instruments){
  result = []
  for(i=0;i<musicians.length;i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}