import { adaptRoute } from "../adapters/express-route-adapter";
import { Router } from "express";
import { makeNovaFaltaController } from "../factories/nova-falta-controller-factory";

export default (router: Router) => {
  router.post("/nova-falta", adaptRoute(makeNovaFaltaController()));
};
