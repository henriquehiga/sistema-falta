import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeNovaAulaController } from "../factories/nova-aula-controller-factory";
import { makeResgataAulasController } from "../factories/resgata-aulas-controller-factory";
import { makeResgataAulasPorIdProfessor } from "../factories/resgata-aulas-por-id-professor-factory";

export default (router: Router) => {
  router.post("/aula", adaptRoute(makeNovaAulaController()));
  router.get("/aula", adaptRoute(makeResgataAulasController()));
  router.get(
    "/aula/:idProfessor",
    adaptRoute(makeResgataAulasPorIdProfessor())
  );
};
