# Weather app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The app uses the built in location service of the browser to geolocate the user and query weather data for the users lat & long coordinates.

It also queries the Google [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) with the co-ordinates and an API key to fetch the users current postal address.

[React Helmet async](https://www.npmjs.com/package/react-helmet-async) is being used to hoist cloud fonts into the document head.

[Styled components](https://styled-components.com/) are used for the (very minor) styling and layout.

[date-fns](https://date-fns.org/) is being used to perform date parsing and comparisons.

[The project is being hosted on Vercel](https://redvine-studios-weather-app.vercel.app/).
