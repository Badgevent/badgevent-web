Web client for Badgevent. Likely only for the admin side. The goal of Badgevent is to build a suplimental application for Eventbrite to add functionality necessary for managing large multi-day conventions and trade shows.

- **Events**: Managment of events imported from Eventbrite.
- **Attendees**: Displaying registered attendees and the assigned badge type. Ability to revoke a badge.
- **Staffing**: Sign up new staff members, recruit volunteers, organize staff into departments, and create work schedules.
- **Programming**: Management of sessions, programming tracks and program schedules. Digital signage for event schedules.
- **Badges**: Design of physical badges using web based SVG templates. Printing of badges and programming of NFC tags attached to badges (e.g. sticker on badge, tag embedded in badge medium). Scanning of NFC at event locations (e.g. session rooms, vendor halls, social gatherings, etc...).
- **Locations**: Defining locations at the event and the access rights necessary for entry to the location. (Can be further by programming schedule activity. E.g. A location might require any valid badge, but a session held at the location might require a Sponsor badge)
- **VIPs**: Creation of VIP types (e.g. Sponsors, Guests, Panelists, etc...). Creation and editing of VIPs including photos, biographical text and timelines.
- **Vendors**: Creation of vendor types (e.g. Exhibitors, Artists, Crafters, Dealers, etc...). Assignment of badges. Inventory of vendor spaces (e.g. Exhibit Booths).

To a great extent this is a rewrite and reimaging of the systems built for Underwater Basket Weaving Expo over 25 years.

## Tech Stack

### Frontend

- SolidJS Typescript
- Tailwind CSS

### Backend

(TBD, backend will be mocked until the UI is MVP)

- AWS DynamoDB likely accessed via AppSync(GraphQL) and API Gateway
- AWS Lambda for server-side event handling
- API Gateway for Eventbrite Webhook and to allow external API Key access
- AWS SNS/SQS for the event bus

## Developer Instructions

Start by installing project dependencies

```bash
$ npm install # or pnpm install or yarn install
```

In the project directory, you can run:

```bash
$ npm run dev
```

```bash
$ npm run start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

```bash
$ npm run build
```

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider

## Notes

For the Linux based digital signage, consider setting up each as a BLE beacon for indoor location mapping. https://github.com/dburr/linux-ibeacon
