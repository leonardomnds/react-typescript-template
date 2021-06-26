import { Route, RouteProps, Redirect } from 'react-router-dom';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export const CustomRoute: React.FC<CustomRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}: CustomRouteProps) => {
  const isAutenticated = false;
  const loginPage = '/';
  const initialPage = '/another-page';

  return (
    <Route
      {...rest}
      render={() =>
        isPrivate === isAutenticated ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? loginPage : initialPage }} />
        )
      }
    />
  );
};
