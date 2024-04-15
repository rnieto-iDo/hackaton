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
    path: "/profile/:id",
    name: "profile",
  },
  RoundTrip: {
    path: "/roundTrip",
    name: "roundTrip",
  },
  Login: {
    path: "/login",
    name: "Login",
  },
  Register: {
    path: "/Register",
    name: "Register",
  },
  DestinationsByAgency: {
    path: "agencies/:id/destinations",
    name: "DestinationsByAgency",
  },
};

export default routes;
