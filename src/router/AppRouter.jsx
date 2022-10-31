import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import("@/pages/Dashboard")
);
const Users = lazy(() =>
  import("@/pages/User/Users")
);
const UserAdd = lazy(() =>
  import("@/pages/User/UserAdd")
);
const UserEdit = lazy(() =>
  import("@/pages/User/UserEdit")
);
const UserInfo = lazy(() =>
  import("@/pages/User/UserInfo")
);

const Courses = lazy(() => import("@/pages/Courses"));
const Posts = lazy(() =>
  import("@/pages/Posts")
);

const Logout = lazy(() =>
  import("@/pages/Logout")
);
const Register = lazy(() =>
  import("@/pages/Register")
);
const NotFound = lazy(() =>
  import("@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute path="/" component={Dashboard} exact />
          <PrivateRoute component={Users} path="/users" exact />
          <PrivateRoute component={UserAdd} path="/user/add" exact />
          <PrivateRoute component={UserInfo} path="/user/:id" exact />
          <PrivateRoute component={UserEdit} path="/user/edit/:id" exact />
          <PrivateRoute component={Courses} path="/course" exact />
          <PrivateRoute component={Posts} path="/posts" exact />
          <PrivateRoute component={Logout} path="/logout" exact />
          <PrivateRoute component={Register} path="/register" exact />
          <PublicRoute path="/login" render={() => <Redirect to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
