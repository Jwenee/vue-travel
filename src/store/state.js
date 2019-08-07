let defaultCity = '秦皇岛'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  console.error(error)
}

export default {
  city: defaultCity
}
