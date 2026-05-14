import { createBuilder } from './.modules/aspire.js';

const builder = await createBuilder();

let web = builder
  .addViteApp('web', './artifacts/web')
  .withPnpm();

if (process.env.FLY_APP_NAME) {
  web = web.withViteConfig('./vite.fly.config.ts');
}

await web;

await builder.build().run();
