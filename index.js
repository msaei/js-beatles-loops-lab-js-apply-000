// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
theBeatlesPlay(musicians, instruments){
  result = []
  for(i=0;i<musicians.length;i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}