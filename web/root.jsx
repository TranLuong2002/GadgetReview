import { Links, Scripts, ScrollRestoration } from "@remix-run/react";
import { AppProvider, Spinner } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppType, Provider as GadgetProvider } from "@gadgetinc/react-shopify-app-bridge";
import appStylesHref from "./components/App.css?url";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { api } from "./api";
import { AuthenticatedApp } from "./components/App";

export const links = () => [
  { rel: "stylesheet", href: appStylesHref },
  {
    rel: "stylesheet",
    href: polarisStyles,
  },
];

export const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://assets.gadget.dev/assets/reset.min.css" />
        <meta name="shopify-api-key" suppressHydrationWarning content="%SHOPIFY_API_KEY%" />
        <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
        <script suppressHydrationWarning>/* --GADGET_CONFIG-- */</script>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <GadgetProvider type={AppType.Embedded} shopifyApiKey={window.gadgetConfig.apiKeys.shopify} api={api}>
      <AppProvider i18n={enTranslations}>
        <AuthenticatedApp />
      </AppProvider>
    </GadgetProvider>
  );
}

export function HydrateFallback() {
  return <Spinner />;
}