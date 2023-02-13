import { adaptRoute } from "../adapters/express-route-adapter";
import { Router } from "express";
import { makeNovaFaltaController } from "../factories/nova-falta-controller-factory";
import { makeResgataFaltasController } from "../factories/resgata-faltas-aluno-controller-factory";

export default (router: Router) => {
  router.post("/nova-falta", adaptRoute(makeNovaFaltaController()));
  router.get("/resgata-faltas/:id", adaptRoute(makeResgataFaltasController()));
};
