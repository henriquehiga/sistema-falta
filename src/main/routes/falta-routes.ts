import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovaFaltaController } from "../factories/nova-falta-controller-factory";
import { makeResgataFaltasController } from "../factories/resgata-faltas-aluno-controller-factory";

export default (router: Router) => {
  router.post("/falta", adaptRoute(makeNovaFaltaController()));
  router.get("/falta/:id", adaptRoute(makeResgataFaltasController()));
};
