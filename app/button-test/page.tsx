import SassButton from "@/components/sassButton/sassButton";

export default function ButtonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="mb-4 font-bold text-lg">
          Buttons that work with Sass and @mixin
        </h1>
        <p>Check components/sassButton to see how they work</p>
        <section className="pb-4 border-b-2 border-gray-500">
          <h2>
            Simple buttons example that leverages on default mixin settings
          </h2>
          <SassButton className="block">Hello, I am a simple button</SassButton>
          <SassButton className="mt-4" variant="cancel">
            Me too!
          </SassButton>
        </section>
        <section className="pb-4 border-b-2 border-gray-500">
          <h2>Examples that take in variants, handled with @mixin</h2>
          <SassButton className="w-full m-2" variant="alert">
            I am a variant that takes in both color and optional text color
          </SassButton>
        </section>
      </div>
    </main>
  );
}
