const routes = {
  Home: {
    path: "/",
    name: "Home",
  },
  Test: {
    path: "/test",
    name: "Test",
  },
  Agencies: {
    path: "/agencies",
    name: "Agencies",
  },
  Profile: {
    path: "/profile",
    name: "profile",
  },
  Login: {
    path: "/login",
    name: "Login",
  },
  DestinationsByAgency: {
    path: "agencies/:id/destinations",
    name: "DestinationsByAgency",
  },
  RoundTrip: {
    path: "/roundTrip",
    name: "roundTrip",
  },
  RoundTripById: {
    path: "/roundTrip/:id/trip",
    name: "roundTripById",
  },
  DestinationById: {
    path: "/destinations/:id",
    name: "DestinationsById",
  },
  Tags: {
    path: "/tags",
    name: "Tags",
  },
  DestinationForm: {
    path: "/destinationForm",
    name: "Destination Form",
  },
  Travels: {
    path: "/my-travels",
    name: "My Travels",
  },
  TravelById: {
    path: "/my-travels/:id",
    name: "TravelById",
  },
};

export default routes;
