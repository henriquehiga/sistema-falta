import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

export const GerenciamentoAluno = () => {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<Criar />);

  function handleChangeComponentOnScreen(component: JSX.Element) {
    setCurrentPage(component);
  }

  return (
    <section className="w-full min-h-screen bg-gray-100">
      <div className="w-full h-full flex flex-col">
        <nav className="w-full bg-blue-900 flex gap-8 px-10 pt-10 ">
          <p
            onClick={() => handleChangeComponentOnScreen(<Criar />)}
            className="border-b-4 py-2 px-8 text-white cursor-pointer"
          >
            Criar
          </p>
          <p
            onClick={() => handleChangeComponentOnScreen(<Lista />)}
            className="border-b-4 py-2 px-8 text-white cursor-pointer"
          >
            Lista
          </p>
        </nav>
        <div className="w-full h-full p-10">{currentPage}</div>
      </div>
    </section>
  );
};

function Lista() {
  const [alunos, setAlunos] = useState<AlunoType[]>([]);
  const { get } = useApi();

  type AlunoType = {
    id: string;
    nome: string;
    aprovado: boolean;
    email_responsavel: string;
    turma: string;
  };

  useEffect(() => {
    resgataAlunos();
  }, []);

  async function resgataAlunos() {
    const output = await get("/aluno");
    if (output) {
      const { data } = output;
      setAlunos(data.body);
    }
  }

  return (
    <div className="w-full h-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Id
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nome
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Editar
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Excluir
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {alunos?.map((aluno) => {
            return (
              <tr key={aluno.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {aluno.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {aluno.nome}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {aluno.turma}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {aluno.email_responsavel}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {aluno.aprovado}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-sm text-white bg-yellow-500 border-none px-8 w-full">
                    Editar
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-sm text-white bg-red-500 border-none px-8 w-full">
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Criar() {
  const { post } = useApi();
  const [nome, setNome] = useState<string>("");
  const [turma, setTurma] = useState<string>("");
  const [emailResponsavel, setEmailResponsavel] = useState<string>("");

  async function criar() {
    const input = {
      nome,
      turma,
      email_responsavel: emailResponsavel,
    };
    const output = await post("/aluno", input);
    if (output) {
      if (output.status == 200) {
        setNome("");
      }
    }
  }

  return (
    <div className="w-full h-full">
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="turma"
              className="block text-sm font-medium text-gray-700"
            >
              Turma
            </label>
            <input
              type="text"
              name="turma"
              id="turma"
              value={turma}
              onChange={(e) => setTurma(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email-responsavel"
              className="block text-sm font-medium text-gray-700"
            >
              Email responsável
            </label>
            <input
              type="text"
              name="email-responsavel"
              id="email-responsavel"
              value={emailResponsavel}
              onChange={(e) => setEmailResponsavel(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="sm:col-span-2 w-full flex justify-end">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              criar();
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Criar
          </button>
        </div>
      </form>
    </div>
  );
}
