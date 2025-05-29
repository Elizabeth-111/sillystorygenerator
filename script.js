const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const storyText = `
:name: went to :place: to buy some :item:.
It was a :weather: day, but everything turned out fine.
On the way back, :name: met a friend and shared a smile.
They talked for a while and laughed about old times.
Finally, :name: returned home feeling happy and calm.
`;

const names = ["John", "Alice", "Charlie", "Luna"];
const places = ["the market", "the park", "school", "the library"];
const items = ["books", "apples", "a new umbrella", "some milk"];
const weathers = ["sunny", "rainy", "windy", "cloudy"];

randomize.addEventListener('click', generateStory);

function generateStory() {
  let newStory = storyText;

  const name = customName.value !== '' ? customName.value : randomValueFromArray(names);
  const place = randomValueFromArray(places);
  const item = randomValueFromArray(items);
  const weather = randomValueFromArray(weathers);

  newStory = newStory.replace(/:name:/g, name);
  newStory = newStory.replace(':place:', place);
  newStory = newStory.replace(':item:', item);
  newStory = newStory.replace(':weather:', weather);

  story.textContent = newStory.trim();
  story.style.visibility = 'visible';
}
