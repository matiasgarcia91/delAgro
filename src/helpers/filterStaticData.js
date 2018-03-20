function findBreed(breedId, breeds) {
  const selected = breeds.find(element => element.id === breedId);
  return selected.name;
}

function findCategory(breedId, categories) {
  const selected = categories.find(element => element.id === breedId);
  return selected.name;
}

export default { findBreed, findCategory };
