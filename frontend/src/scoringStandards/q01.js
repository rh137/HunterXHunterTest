const s = {
  "A": (point) => {
    point["ENH"] += 10;
    point["EMI"] += 10;
    point["MAN"] += 10;
  },
  "B": (point) => {
    point["TRA"] += 10;
    point["CON"] += 10;
    point["SPE"] += 10;
  }
}

export default s;