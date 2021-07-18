const s = {
  "A": (p) => { p.CON += 30; },
  "B": (p) => {
    for (let k in p) {
      if (k !== "CON") p[k] += 6;
    }
  },
}

export default s;