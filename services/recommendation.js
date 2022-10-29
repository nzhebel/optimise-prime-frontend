export function getRecommendation() {
    return fetch('https://8nkqvgf3u1.execute-api.eu-central-1.amazonaws.com/recommendation')
      .then(data => data.json())
  }