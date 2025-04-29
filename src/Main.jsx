import Gold from "./Gold";
import { RawIntlProvider, createIntlCache, createIntl } from "react-intl";
import { Toaster } from 'react-hot-toast'

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: "pt-BR",
  },
  cache
);

const Main = () => {
  return (
    <div>

<Toaster />

        <RawIntlProvider value={intl}>
          <Gold />
        </RawIntlProvider>
      
    </div>
  );
};

export default Main;
