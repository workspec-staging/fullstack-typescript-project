import { createBuilder } from './.modules/aspire.js';

const builder = await createBuilder();

await builder
  .addViteApp('web', './artifacts/web')
  .withHttpEndpoint({ env: 'PORT' });

await builder.build().run();
