const s = {
  "A": (p) => { p.EMI += 30; },
  "B": (p) => {
    for (let k in p) {
      if (k !== "EMI") p[k] += 6;
    }
  },
}

export default s;