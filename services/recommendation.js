export function getRecommendation() {
    return fetch('https://fc2jlzu9u6.execute-api.eu-central-1.amazonaws.com/recommendation')
      .then(data => data.json())
  }