import PasswordlessReact from 'supertokens-auth-react/recipe/passwordless'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'
import { SuperTokensConfig } from 'supertokens-auth-react/lib/build/types'
import { useRouter } from "next/navigation";
import {UserInput} from "supertokens-web-js/lib/build/recipe/totp";

const routerInfo: { router?: ReturnType<typeof useRouter>; pathName?: string } =
  {};

export function setRouter(
  router: ReturnType<typeof useRouter>,
  pathName: string,
) {
  routerInfo.router = router;
  routerInfo.pathName = pathName;
}

export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    recipeList: [
      PasswordlessReact.init({
        // @ts-ignore
        contactMethod: "EMAIL"
      }),
      SessionReact.init(),
    ],
    windowHandler: (original) => ({
      ...original,
      location: {
        ...original.location,
        getPathName: () => routerInfo.pathName!,
        assign: (url) => routerInfo.router!.push(url.toString()),
        setHref: (url) => routerInfo.router!.push(url.toString()),
      },
    }),
  }
}