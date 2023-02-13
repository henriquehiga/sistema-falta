import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovaAulaController } from "../factories/nova-aula-controller-factory";
import { Router } from "express";

export default (router: Router) => {
  router.post("/nova-aula", adaptRoute(makeNovaAulaController()));
};
