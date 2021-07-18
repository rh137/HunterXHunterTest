const s = {
  "A": (p) => { p.SPE += 30; },
  "B": (p) => {
    for (let k in p) {
      if (k !== "SPE") p[k] += 6;
    }
  },
}

export default s;