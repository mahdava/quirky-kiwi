import SassButton from "@/components/sassButton/sassButton";

export default function ButtonPage() {
  return (
    <main>
      <div className="p-4">
        <h1 className="mb-4 font-bold text-lg">
          Buttons that work with Sass and @mixin
        </h1>
        <p>
          Check{" "}
          <mark className="inline-block p-1 rounded-sm bg-orange-300">
            `components/sassButton`
          </mark>{" "}
          to see how they work
        </p>
        <section className="pb-4 border-b-2 border-gray-500">
          <h2>
            Simple buttons example that leverages on default mixin settings
          </h2>
          <SassButton>Hello, I am a simple button</SassButton>
          <SassButton className="block mt-4" variant="cancel">
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
