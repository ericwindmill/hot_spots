const fetchTrendingURL = 'https://api.foursquare.com/v2/venues/trending?ll=37.7589982,-122.4177836&limit=5&intent=checkin&client_id=O00QTVUP55T4VF2FPM0ACUU333YOJ1LGEIES2VQKPPCZS2BA&client_secret=PQBEIBPC0VBEGYXYIPAHITW40LLAINPWJN3JJMPU25Y0L4T5&v=20160828'

export const fetchVenues = () => {
  fetch(fetchTrendingURL, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  .then(response => {return response.json() })
}
