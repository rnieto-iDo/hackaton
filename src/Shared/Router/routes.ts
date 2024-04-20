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
  RoundTrip: {
    path: "/roundTrip",
    name: "roundTrip",
  },
  DestinationsByAgency: {
    path: "agencies/:id/destinations",
    name: "DestinationsByAgency",
  },
  DestinationById: {
    path: "/destinations/:id",
    name: "DestinationsById",
  },
  Tags: {
    path: "/tags",
    name: "Tags",
  },
};

export default routes;
