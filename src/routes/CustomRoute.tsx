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
  const isAutenticated = true;
  const loginPage = '/signin';
  const initialPage = '/app';

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
