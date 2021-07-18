const s = {
  "A": (p) => { p.TRA += 30; },
  "B": (p) => {
    for (let k in p) {
      if (k !== "TRA") p[k] += 6;
    }
  },
}

export default s;