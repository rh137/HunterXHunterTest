const s = {
  "A": (p) => { p.CON += 15; p.MAN += 15; },
  "B": (p) => { p.EMI += 15; p.ENH += 15; },
  "C": (p) => { p.SPE += 15; p.TRA += 15; },
  "D": (p) => {
    for (let k in p) {
      p[k] += 5;
    }
  }
}

export default s;