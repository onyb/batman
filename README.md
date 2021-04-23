# Batman

Batman is a bare-bones cryptocurrency price and market cap tracker. It sources market data from [CoinGecko](https://www.coingecko.com).

**Demo:** https://xenodochial-boyd-a859c5.netlify.app

<p align="center">
  <img width="768" src="https://user-images.githubusercontent.com/3684187/115843419-1c429880-a41f-11eb-8610-1a1fe54097e3.png">
</p>

## Features

- Cryptocurrency prices by market cap, refreshed every 5 seconds.
- Pagination
- Watchlist to allow saving your favorite coins, while browsing through pages.

## Local development

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Tech Stack

- React
- Redux
- ES6
- Netlify

### Code Organization

- [`batman/src/redux`](https://github.com/onyb/batman/tree/master/src/redux)  => Redux store configuration, and reducers.
- [`batman/src/components`](https://github.com/onyb/batman/tree/master/src/components) => screens for React views.

### Deployment

Currently, the app can be only deployed on [Netlify](https://www.netlify.com) by user @onyb. The command to do it is:

```sh
$ netlify deploy --prod
```
