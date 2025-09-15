# gas-prices-estimator
Web tool meant to answer the question if you should get gas today at the current price or risk it untill tomorrow in hopes it gets lower.

Built using Next.js

# FuelCast

This project was generated with next.js create-next-app.

Hosted using Firebase

Autodeployments occur on all commits to main branch.

# TODO:
- Update historic gas prices request to request data for the last 12 months
- Basic average math to give the hold or pump now signal
    - Probably going to just check this month one year ago and the last month and use that to make an estimated price. Very simple for now.
- CSS Tailwind to get it looking good
- update environment variables in github
- deploy to firebase

# Running Locally

If running locally use the following commands

```
npm install
npm run start or npm run dev
```

Should be availilbe on: http://localhost:3000/