const s = {
  "A": (p) => { p.MAN += 30; },
  "B": (p) => {
    for (let k in p) {
      if (k !== "MAN") p[k] += 6;
    }
  },
}

export default s;