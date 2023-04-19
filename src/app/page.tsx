import Image from 'next/image';

export default function Home() {
  return (
    <section className="max-w-2xl">
      <Image
        className="rounded-full h-16 w-16 object-cover bg-base-100"
        alt="avatar"
        src="/images/avatar.jpg"
        width={60}
        height={50}
      />
      <h1 className="text-4xl font-bold tracking-tight mt-6">
        Software Engineer, husband, front-end enthusiast.
      </h1>
      <p className="text-base mt-6">
        I`&apos;`m João Marcos, a software engineer based on Brazil. As a
        technology lover, I really like to learn and share knowledge. I
        appreciate good challenges. I like to understand and solve complex
        problems. I also like to create simple and expressive interfaces that
        bring the best experiences for users.
      </p>
    </section>
  );
}
