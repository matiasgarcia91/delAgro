function findBreed(breedId, breeds) {
  const selected = breeds.find(element => element.id === breedId);
  return selected.name;
}

function findCategory(breedId, categories) {
  if (!categories) return '';
  const selected = categories.find(element => element.id === breedId);
  return selected.name;
}

export default { findBreed, findCategory };
