import { setupApp } from "./config/app";
import env from "./config/env";

(async () => {
  const app = await setupApp();
  app.listen(env.port, () =>
    console.log(`Rodando servidor na porta ${env.port}`)
  );
})();
