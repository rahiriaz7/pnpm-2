import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-6xl w-full items-center justify-between font-bold text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-700 bg-gradient-to-b from-blue-600 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto text-red-600 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          MANTECH&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end bg-yellow-400 justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/mantech.png"
              alt=""
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/ai-1.png"
          alt=""
          width={180}
          height={24}
          priority
        />
      </div>

      <div className="mb-32 grid text-center bg bg-yellow-400 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https:/website-peach-nine-50.vercel.app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-red-600 hover:bg-green-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-purple-600 font-semibold`}>
            Project-1{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-lg text-blue-800 opacity-50`}>
            First Template Next.js-14 features and API.
          </p>
        </a>

        <a
          href="https:/nextjs-14-9yx8tdpk8-riaz-ahmads-projects-132d336f.vercel.app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-red-800 hover:bg-orange-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-purple-600 font-semibold`}>
            Project-2{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-lg text-blue-800 opacity-50`}>
            Learn about Next.js-14 & React Templates
          </p>
        </a>

        <a
          href="https://linked-ej17s7h82-riaz-ahmads-projects-132d336f.vercel.app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-red-800 hover:bg-purple-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-purple-600 font-semibold`}>
            Project-3{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-lg text-blue-800 opacity-50`}>
            Explore starter templates for Next.js-14
          </p>
        </a>

        <a
          href="https://pnpm-1lwl8580o-riaz-ahmads-projects-132d336f.vercel.app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-red-800 hover:bg-green-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-purple-600 font-semibold`}>
            Project-4{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-lg text-blue-800 opacity-50 text-balance`}>
            Instantly deploy your Next.js-14 Project to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-red-600 bg-blue-500 lg:text-5xl">
      Mantech : Web Development
    </h1>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold bg-red-400 tracking-tight first:mt-0">
      The People of the PAKISTAN
    </h2>
    <h3 className="scroll-m-20 text-2xl font-semibold bg-orange-300 tracking-tight">
      The Joke Tax
    </h3>
    <h4 className="scroll-m-20 text-xl font-semibold bg-purple-500 tracking-tight">
      People stopped telling jokes
    </h4>
    <p className="leading-7 bg-orange-700 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
    <blockquote className="mt-6 bg-yellow-700 border-l-2 pl-6 italic">
      After all, he said everyone enjoys a good joke, so its only fair that
      they should pay for the privilege
    </blockquote>
    <div className="my-6 w-full bg-green-700 overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Kings Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Peoples happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul className="my-6 ml-6 list-disc bg-red-600 [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
    <code className="relative rounded bg-muted px-[0.3rem] bg-yellow-500 py-[0.2rem] font-mono text-sm font-semibold">
      @radix-ui/react-alert-dialog
    </code>
    <p className="text-xl bg-blue-700 text-yellow-500 text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
    <div className="text-lg bg-purple-700 font-semibold">Are you absolutely sure?</div>
    <small className="text-sm font-medium bg-orange-600 leading-none">Email address</small>
    <p className="text-sm text-muted-foreground bg-green-500 text-purple-700">rahiriaz7@gmail.com</p>

    </main>
  );
}
