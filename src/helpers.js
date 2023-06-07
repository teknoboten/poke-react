const getThumbs = (id) => {
  if (id < 10) {
    return `http://localhost:9000/images/00${id}.png`
  }
  if (id > 9 && id < 100) {
    return `http://localhost:9000/images/0${id}.png`
  }
  if (id > 99) {
    return `http://localhost:9000/images/${id}.png`
  }
}

const colors = {
  Grass: '#4caf50',
  Fire: '#ff5722',
  Water: '#90caf9',
  Bug: '#cddc39',
  Normal: '#03a9f4',
  Poison: '#76ff03',
  Electric: '#ffff00',
  Ground: '#bcaaa4',
  Fairy: '#f48fb1',
  Fighting: '#d50000',
  Psychic: '#b388ff',
  Rock: '#bdbdbd',
  Ghost: '#bdbdbd',
  Ice: '#bbdefb',
  Dragon: '#4db6ac',
  Dark: '#5c6bc0',
  Steel: '#607d8b',
  Flying: '#00e5ff',
}

const setColorByType = (t) => {
  return colors[t]
}

module.exports = { getThumbs, setColorByType }
