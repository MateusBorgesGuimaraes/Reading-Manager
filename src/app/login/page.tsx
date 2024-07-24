import Link from 'next/link';

export default function LoginPage() {
  return (
    <section className="container h-[calc(100vh-81px)] flex items-center justify-center lg:my-4">
      <div className="lg:bg-white lg:rounded-lg lg:shadow-md w-full h-full lg:h-5/6 flex  justify-center items-center flex-col smallest:px-8 px-1 max-w-[800px] lg:px-12 lg:py-12 ">
        <h1 className="smallest:text-3xl text-green-800 text-2xl font-title mb-8 self-start">
          LOGAR NA CONTA
        </h1>
        <form
          action=""
          className=" w-full flex flex-col gap-4 lg:max-w-[600px] items-center justify-center"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-xl text-green-600">
              nome
            </label>
            <input
              type="text"
              className="text-gray-700 px-1 bg-gray-200 rounded-[4px] h-10 hover:bg-gray-300 duration-300 outline-green-600"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-xl text-green-600">
              senha
            </label>
            <input
              type="password"
              className="text-gray-700 px-1 bg-gray-200 rounded-[4px] h-10 hover:bg-gray-300 duration-300 outline-green-600"
            />
          </div>

          <button className="bg-green-600 py-4 rounded-lg text-2xl font-title text-white hover:bg-green-700 duration-300 mt-3 w-full">
            ENTRAR
          </button>

          <Link
            href={'/login/criar'}
            className="smallest:text-base text-sm text-gray-500 underline hover:text-gray-400 duration-300 self-start"
          >
            não tem uma conta ainda? cadastre-se já!
          </Link>
        </form>
      </div>
    </section>
  );
}
