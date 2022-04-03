// traitement des pages
function AfficheModeleLettre(dataCv) {
  let nom = dataCv["nom"]
  let prenom = dataCv["prenom"]
  let boite = dataCv["boite"]
  let tel = dataCv["tel"]
  let mail = dataCv["mail"]
  let poste = dataCv["poste"]
  let loc = dataCv["loc"]
  let desc = dataCv["desc"]
  let rythme = dataCv["rythme"]

  let salaire = 'La rémunération de départ '
  if (dataCv["salaire"] == 45) {
    salaire = salaire + `est de 45K euros `
  }
  else if (dataCv["salaire"] == 50) {
    salaire = salaire + ' se situe entre 45 et 50K euros '
  }
  else if (dataCv["salaire"] == 55) {
    salaire = salaire + ' se situe entre 50 et 55K euros '
  }
  else if (dataCv["salaire"] == 60) {
    salaire = salaire + ' se situe entre 55 et 60K euros '
  }
  else if (dataCv["salaire"] == "plus") {
    salaire = salaire + ' supérieur à 60K euros '
  }

  let ip = "."
  if (dataCv["ip"] != 0) {
    ip = ' (la participation/intéressement moyen de ces 5 dernières années '
    if (dataCv["ip"] == 1) {
      ip = ip + `est d'environ 1000 euros).`
    }
    else if (dataCv["ip"] == 4) {
      ip = ip + ' entre 1 et 4K euros).'
    }
    else if (dataCv["ip"] == 7) {
      ip = ip + ' entre 4 et 7K euros).'
    }
    else if (dataCv["ip"] == "plus") {
      ip = ip + ' supérieur à 7).'
    }
  }

  let petitsPlus = `<ul>De plus, l'établissement `
  for (let d in dataCv) {
    if (d == "cantine") {
      petitsPlus = petitsPlus + `
      <li>dispose d'un restaurant d'entreprise</li>`
    }
    if (d == "tr") {
      petitsPlus = petitsPlus + `
        <li>propose des tickets restaurant</li>`
    }
    if (d == "chqv") {
      petitsPlus = petitsPlus + `
          <li>propose des chèques vacances</li>`
    }
    if (d == "park") {
      petitsPlus = petitsPlus + `
            <li>dispose d'un parking</li>`
    }
    if (d == "velo") {
      petitsPlus = petitsPlus + `
              <li>peut verser une indemnité cyclistes</li>`
    }
    petitsPlus = petitsPlus + `</ul>`
  }

  let msg = `bonjour sophie, </br></br>
    La société ${boite} est très intéressée par votre profil et vous propose
    un poste de ${poste} situé à ${loc}.
    </br> </br>
    ${desc} 
    </br> </br>
    ${salaire}${ip}
    </br>
    Pour info, sachez que le rythme de travail est de ${rythme} heures.
    </br>
    ${petitsPlus}
    </br>
    Vous pouvez me contacter au ${tel} ou par mail <a href="mailto:${mail} ">${mail}</a> 
    fin que nous puissions fixer d'un rendez-vous.
    </br></br>
    A très bientôt j'espère
    </br>${prenom} ${nom}
    `
  return `${msg}`
}

module.exports = {
  AfficheModeleLettre
}
