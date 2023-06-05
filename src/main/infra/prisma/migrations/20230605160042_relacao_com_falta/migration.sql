-- CreateTable
CREATE TABLE "turma" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aluno" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "aprovado" BOOLEAN,
    "email_responsavel" TEXT NOT NULL,
    "turma_id" TEXT NOT NULL,
    "turma_nome" TEXT NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disciplina" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "qtd_aulas" INTEGER NOT NULL,

    CONSTRAINT "disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "falta" (
    "id" TEXT NOT NULL,
    "aluno_id" TEXT NOT NULL,
    "aula_id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "falta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aula" (
    "id" TEXT NOT NULL,
    "dia_semana" INTEGER NOT NULL DEFAULT 0,
    "professor_id" TEXT NOT NULL,
    "professor_nome" TEXT NOT NULL,
    "disciplina_id" TEXT NOT NULL,
    "disciplina_nome" TEXT NOT NULL,
    "turma_id" TEXT NOT NULL,
    "turma_nome" TEXT NOT NULL,

    CONSTRAINT "aula_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "turma_id_nome_key" ON "turma"("id", "nome");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_nome_key" ON "aluno"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "professor_id_nome_key" ON "professor"("id", "nome");

-- CreateIndex
CREATE UNIQUE INDEX "disciplina_nome_key" ON "disciplina"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "disciplina_id_nome_key" ON "disciplina"("id", "nome");

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_turma_id_turma_nome_fkey" FOREIGN KEY ("turma_id", "turma_nome") REFERENCES "turma"("id", "nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "falta" ADD CONSTRAINT "falta_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "falta" ADD CONSTRAINT "falta_aula_id_fkey" FOREIGN KEY ("aula_id") REFERENCES "aula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_disciplina_id_disciplina_nome_fkey" FOREIGN KEY ("disciplina_id", "disciplina_nome") REFERENCES "disciplina"("id", "nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_professor_id_professor_nome_fkey" FOREIGN KEY ("professor_id", "professor_nome") REFERENCES "professor"("id", "nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_turma_id_turma_nome_fkey" FOREIGN KEY ("turma_id", "turma_nome") REFERENCES "turma"("id", "nome") ON DELETE RESTRICT ON UPDATE CASCADE;
