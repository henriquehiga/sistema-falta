import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

export const GerenciamentoProfessor = () => {
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
  const [professores, setProfessores] = useState<ProfessorType[]>([]);
  const { get } = useApi();

  type ProfessorType = {
    id: string;
    nome: string;
  };

  useEffect(() => {
    resgataProfessores();
  }, []);

  async function resgataProfessores() {
    const output = await get("/professor");
    if (output) {
      const { data } = output;
      setProfessores(data.body);
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
          {professores?.map((professor) => {
            return (
              <tr key={professor.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {professor.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {professor.nome}
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

  async function criar() {
    const input = {
      nome,
    };
    const output = await post("/professor", input);
    if (output) {
      if (output.status == 200) {
        setNome("");
      }
    }
  }

  return (
    <div className="w-full h-full">
      <form className="flex flex-col gap-4">
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
        <div className="sm:col-span-2 w-full flex justify-end">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              criar();
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
