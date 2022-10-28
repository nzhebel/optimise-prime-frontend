export function getRecommendation() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
  }