import { createBuilder } from './.modules/aspire.js';

const builder = await createBuilder();

await builder
  .addViteApp('web', './artifacts/web')
  .withPnpm()
  .withHttpEndpoint({ env: 'PORT' });

await builder.build().run();
