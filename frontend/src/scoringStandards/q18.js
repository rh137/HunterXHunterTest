const s = {
  "A": (p) => { p.ENH += 30; },
  "B": (p) => {
    for (let k in p) {
      if (k !== "ENH") p[k] += 6;
    }
  },
}

export default s;