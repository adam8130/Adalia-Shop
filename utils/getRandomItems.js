// getRandomItems: return random items from array based on count
// array: array of items
// count: number of items to return
// except: item to exclude from returned items

const getRandomItems = (array, count, except) => {
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  if (except) shuffled.splice(shuffled.indexOf(except), 1);
  return shuffled.slice(0, count);
};

module.exports = { getRandomItems };