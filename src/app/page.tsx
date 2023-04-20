import { BaseText } from '@/components/BaseText';
import { PageHeader } from '@/components/PageHeader';
import { SocialMedia } from '@/components/SocialMedia';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="max-w-2xl flex flex-col gap-6 mt-16">
      <Image
        className="rounded-full h-16 w-16 object-cover bg-base-100"
        alt="avatar"
        src="/images/avatar.jpg"
        width={60}
        height={50}
      />
      <PageHeader>Software Engineer, husband, front-end enthusiast.</PageHeader>
      <BaseText>
        I&apos;m João Marcos, a software engineer based on Brazil. As a
        technology lover, I really like to learn and share knowledge. I
        appreciate good challenges. I like to understand and solve complex
        problems. I also like to create simple and expressive interfaces that
        bring the best experiences for users.
      </BaseText>
      <SocialMedia />
    </section>
  );
}
