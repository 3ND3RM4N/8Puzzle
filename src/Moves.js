export const Moves = [
  {
    left: boxConfig => null,
    top: boxConfig => null,
    right: boxConfig =>
      ([boxConfig[0], boxConfig[1]] = [boxConfig[1], boxConfig[0]]),
    bottom: boxConfig =>
      ([boxConfig[0], boxConfig[3]] = [boxConfig[3], boxConfig[0]])
  },
  {
    left: boxConfig => Moves[0].right(boxConfig),
    top: boxConfig => null,
    right: boxConfig =>
      ([boxConfig[1], boxConfig[2]] = [boxConfig[2], boxConfig[1]]),
    bottom: boxConfig =>
      ([boxConfig[1], boxConfig[4]] = [boxConfig[4], boxConfig[1]])
  },
  {
    left: boxConfig => Moves[1].right(boxConfig),
    top: boxConfig => null,
    right: boxConfig => null,
    bottom: boxConfig =>
      ([boxConfig[2], boxConfig[5]] = [boxConfig[5], boxConfig[2]])
  },
  {
    left: boxConfig => null,
    top: boxConfig => Moves[0].bottom(boxConfig),
    right: boxConfig =>
      ([boxConfig[3], boxConfig[4]] = [boxConfig[4], boxConfig[3]]),
    bottom: boxConfig =>
      ([boxConfig[3], boxConfig[6]] = [boxConfig[6], boxConfig[3]])
  },
  {
    left: boxConfig => Moves[3].right(boxConfig),
    top: boxConfig => Moves[1].bottom(boxConfig),
    right: boxConfig =>
      ([boxConfig[4], boxConfig[5]] = [boxConfig[5], boxConfig[4]]),
    bottom: boxConfig =>
      ([boxConfig[4], boxConfig[7]] = [boxConfig[7], boxConfig[4]])
  },
  {
    left: boxConfig => Moves[4].right(boxConfig),
    top: boxConfig => Moves[2].bottom(boxConfig),
    right: boxConfig => null,
    bottom: boxConfig =>
      ([boxConfig[5], boxConfig[8]] = [boxConfig[8], boxConfig[5]])
  },
  {
    left: boxConfig => null,
    top: boxConfig => Moves[3].bottom(boxConfig),
    right: boxConfig =>
      ([boxConfig[6], boxConfig[7]] = [boxConfig[7], boxConfig[6]]),
    bottom: boxConfig => null
  },
  {
    left: boxConfig => Moves[6].right(boxConfig),
    top: boxConfig => Moves[4].bottom(boxConfig),
    right: boxConfig =>
      ([boxConfig[7], boxConfig[8]] = [boxConfig[8], boxConfig[7]]),
    bottom: boxConfig => null
  },
  {
    left: boxConfig => Moves[7].right(boxConfig),
    top: boxConfig => Moves[5].bottom(boxConfig),
    right: boxConfig => null,
    bottom: boxConfig => null
  }
];
