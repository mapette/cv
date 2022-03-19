// traitement des pages
function AfficheDataCv(dataCv) {
  let data = ""
  for (let d in dataCv){
    data = `${data}
          <li>${d} - ${dataCv[d]}</li>`
  }
  return `<ul>
      ${data}
  </ul>`
}



module.exports={
  AfficheDataCv
}
