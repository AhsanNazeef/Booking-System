# React + TypeScript + Vite Project

This project is a React application built with TypeScript and Vite. It includes various components and pages to create a comprehensive web application.

## Project Structure

```

.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
App.tsx
assets/
Images/
components/
BaseButton/
BaseLink/
BookingForm/
DestinationCard/
Header/
HomeImageGrid/
ImageGrid/
IncludedList/
Layout/
PopularSearch/
ScheduleCard/
SearchBar/
constants.ts
index.css
main.tsx
pages/
BookingConfirmation/
BookTour/
DestinationDetails/
ExploreTours/
Home/
MyTours/
NotFound/
router.tsx
utils/
vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts

```

## Getting Started

### Navigate to the project directory:

```sh
cd booking-system
```

### Install the dependencies:

```sh
npm install
```

### Running the Project

To start the development server, run:

```sh
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### Building the Project

To build the project for production, run:

```sh
npm run build
```

The built files will be in the `dist` directory.

### Linting

To lint the project, run:

```sh
npm run lint
```

## Project Details

### Components

- **BaseButton**: A reusable button component.
- **BaseLink**: A reusable link component.
- **BookingForm**: A form component for booking.
- **DestinationCard**: A card component to display destination details.
- **Header**: The header component of the application.
- **HomeImageGrid**: A grid component to display images on the home page.
- **ImageGrid**: A grid component to display images.
- **IncludedList**: A component to display a list of included items.
- **Layout**: The layout component of the application.
- **PopularSearch**: A component to display popular searches.
- **ScheduleCard**: A card component to display schedule details.
- **SearchBar**: A search bar component.

### Pages

- **BookingConfirmation**: The booking confirmation page.
- **BookTour**: The page to book a tour.
- **DestinationDetails**: The page to display destination details.
- **ExploreTours**: The page to explore tours.
- **Home**: The home page.
- **MyTours**: The page to display user's tours.
- **NotFound**: The 404 not found page.

### Constants

The `constants.ts` file contains various constants used throughout the application.

### Styles

The styles for the components are defined in the `styles.ts` file.

### Router

The `router.tsx` file contains the routing configuration for the application.

### Utilities

The `utils` directory contains utility functions used throughout the application.
