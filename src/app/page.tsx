import { Form } from '@/components/common/Form';
import { DangerButton } from '@/components/common/DangerButton';
import { SecondaryButton } from '@/components/common/SecondaryButton';

export default function Home() {
  return (
    <main className="container mx-auto px-6">
      <div className="z-10 w-full items-center  justify-between py-6 font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">MY TODO</h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/okky-hi/my-todo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By hiokky
          </a>
        </div>
      </div>

      <div className="mb-32">
        <div className="px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">タスクの追加</h2>
          <Form />
        </div>

        <div className="px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">タスク一覧</h2>
          <div className='container mt-10'>
            <ul className="divide-y">
              <li className="grid items-center space-y-2 py-4 md:grid-cols-12 md:space-x-2 md:space-y-0">
                <span className="md:col-span-9">タスク</span>
                <span className='space-x-2 md:col-span-3'>
                  <SecondaryButton>タスクを完了</SecondaryButton>
                  <DangerButton>タスクを消去</DangerButton>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
