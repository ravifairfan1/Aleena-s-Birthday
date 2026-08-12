"use client";

import { useState } from "react";

const memories = [
  {
    image: "/Aleena-s-Birthday/memory1.png",
    caption: "A little moment to remember 🌷",
    rotate: "-rotate-2",
  },
  {
    image: "/Aleena-s-Birthday/memory2.png",
    caption: "Good times, beautiful memories 💕",
    rotate: "rotate-2",
  },
  {
    image: "/Aleena-s-Birthday/memory3.png",
    caption: "One of my favorite moments ✨",
    rotate: "-rotate-1",
  },
  {
    image: "/Aleena-s-Birthday/memory4.png",
    caption: "Just us being us 🤍",
    rotate: "rotate-2",
  },
  {
    image: "/Aleena-s-Birthday/memory5.png",
    caption: "A memory worth keeping forever 🌸",
    rotate: "-rotate-2",
  },
];

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f7] text-[#59454b]">

      {/* Floating decorations */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[15%] text-2xl opacity-60 animate-bounce">
          🌸
        </span>

        <span className="absolute right-[10%] top-[20%] text-xl opacity-60">
          ✨
        </span>

        <span className="absolute left-[15%] bottom-[20%] text-xl opacity-50">
          💕
        </span>

        <span className="absolute right-[15%] bottom-[15%] text-2xl opacity-60">
          🌷
        </span>
      </div>

      {/* HERO / BIRTHDAY SECTION */}
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="relative w-full max-w-2xl text-center">

          {!opened ? (
            <div className="rounded-[2rem] border border-[#f3dfe4] bg-white/80 px-6 py-14 shadow-[0_20px_60px_rgba(180,130,145,0.15)] backdrop-blur-sm sm:px-12">

              <div className="mb-5 text-5xl">🌷</div>

              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c28b9b]">
                A little surprise
              </p>

              <h1 className="font-serif text-5xl font-semibold text-[#765763] sm:text-6xl">
                For My
              </h1>

              <h2 className="mt-2 text-4xl font-semibold text-[#c48799] sm:text-5xl">
                Pyari Aleena 💕
              </h2>

              <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#806b70]">
                I made something small and special for you...
                <br />
                because today is all about you. 🌸
              </p>

              <button
                onClick={() => setOpened(true)}
                className="mt-9 rounded-full bg-[#d99aaa] px-8 py-4 text-sm font-medium text-white shadow-lg shadow-[#d99aaa]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#cc8c9e]"
              >
                Open Your Surprise 🎁
              </button>

              <p className="mt-6 text-xs text-[#b49ca2]">
                Made with lots of love ♡
              </p>
            </div>
          ) : (
            <div className="rounded-[2rem] border border-[#f3dfe4] bg-white/90 px-6 py-14 shadow-[0_20px_60px_rgba(180,130,145,0.15)] sm:px-12">

              <div className="mb-5 text-6xl animate-bounce">
                🎂
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-[#c28b9b]">
                29 August
              </p>

              <h1 className="mt-4 font-serif text-5xl font-semibold text-[#765763] sm:text-6xl">
                Happy Birthday
              </h1>

              <h2 className="mt-3 text-4xl font-semibold text-[#c48799] sm:text-5xl">
                Pyari Aleena 💕
              </h2>

              <div className="mx-auto mt-7 h-px w-24 bg-[#e8c4cc]" />

              <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-[#806b70]">
                Today is your special day, and I just wanted to remind you
                how special you are. 🌷
                <br />
                <br />
                May your day be filled with happiness, beautiful moments,
                lots of smiles, and everything your heart wishes for. ✨
              </p>

              <div className="mt-8 text-2xl">
                🌸 ✨ 💕 ✨ 🌸
              </div>

              <p className="mt-8 font-serif text-lg italic text-[#a87886]">
                This little surprise is just for you ♡
              </p>
            </div>
          )}

        </div>
      </section>

      {/* MEMORIES SECTION */}
      <section className="relative px-6 py-24 sm:px-10">

        <div className="mx-auto max-w-6xl">

          {/* Section heading */}
          <div className="mb-16 text-center">

            <div className="mb-4 text-4xl">
              📸
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#c28b9b]">
              Little moments
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#765763] sm:text-5xl">
              Our Little Memories
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#806b70]">
              Some moments may seem small, but they become the memories
              we keep closest to our hearts. 💕
            </p>

          </div>

          {/* Photos */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">

            {memories.map((memory, index) => (
              <div
                key={index}
                className={`group mx-auto w-full max-w-sm ${memory.rotate} transition duration-500 hover:rotate-0 hover:-translate-y-2`}
              >

                <div className="rounded-2xl bg-white p-4 pb-6 shadow-[0_15px_40px_rgba(180,130,145,0.15)]">

                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={memory.image}
                      alt={`Memory ${index + 1}`}
                      className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-5 text-center font-serif text-lg italic text-[#806b70]">
                    {memory.caption}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom message */}
          <div className="mt-20 text-center">

            <div className="text-2xl">
              🌷 💕 🌷
            </div>

            <p className="mx-auto mt-5 max-w-lg font-serif text-lg italic text-[#a87886]">
              And these are just a few of the moments that make our
              friendship special. ♡
            </p>

          </div>

        </div>

      </section>
      {/* THINGS I APPRECIATE ABOUT YOU */}
<section className="px-6 py-24 sm:px-10">
  <div className="mx-auto max-w-5xl">

    {/* Heading */}
    <div className="mb-14 text-center">
      <div className="mb-4 text-4xl">
        💕
      </div>

      <p className="text-sm uppercase tracking-[0.3em] text-[#c28b9b]">
        A little reminder
      </p>

      <h2 className="mt-3 font-serif text-4xl font-semibold text-[#765763] sm:text-5xl">
        Things I Appreciate About You
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#806b70]">
        Just a few things that make you the lovely person you are. 🌷
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <div className="rounded-3xl border border-[#f3dfe4] bg-white/80 p-7 text-center shadow-[0_15px_40px_rgba(180,130,145,0.10)] transition duration-300 hover:-translate-y-2">
        <div className="mb-4 text-4xl">🌸</div>
        <h3 className="font-serif text-xl font-semibold text-[#765763]">
          Your Kind Heart
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#806b70]">
          You have such a beautiful heart, and your kindness makes people
          around you feel special.
        </p>
      </div>

      <div className="rounded-3xl border border-[#f3dfe4] bg-white/80 p-7 text-center shadow-[0_15px_40px_rgba(180,130,145,0.10)] transition duration-300 hover:-translate-y-2">
        <div className="mb-4 text-4xl">😂</div>
        <h3 className="font-serif text-xl font-semibold text-[#765763]">
          Your Crazy Side
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#806b70]">
          Life is definitely more fun, random, and memorable whenever you
          are around.
        </p>
      </div>

      <div className="rounded-3xl border border-[#f3dfe4] bg-white/80 p-7 text-center shadow-[0_15px_40px_rgba(180,130,145,0.10)] transition duration-300 hover:-translate-y-2">
        <div className="mb-4 text-4xl">🤍</div>
        <h3 className="font-serif text-xl font-semibold text-[#765763]">
          Our Friendship
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#806b70]">
          Some friendships just become a part of your life, and I am
          genuinely grateful for ours.
        </p>
      </div>

      <div className="rounded-3xl border border-[#f3dfe4] bg-white/80 p-7 text-center shadow-[0_15px_40px_rgba(180,130,145,0.10)] transition duration-300 hover:-translate-y-2">
        <div className="mb-4 text-4xl">✨</div>
        <h3 className="font-serif text-xl font-semibold text-[#765763]">
          Your Smile
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#806b70]">
          Never stop smiling, because your happiness is one of the sweetest
          things to see.
        </p>
      </div>

      <div className="rounded-3xl border border-[#f3dfe4] bg-white/80 p-7 text-center shadow-[0_15px_40px_rgba(180,130,145,0.10)] transition duration-300 hover:-translate-y-2">
        <div className="mb-4 text-4xl">🌷</div>
        <h3 className="font-serif text-xl font-semibold text-[#765763]">
          The Little Things
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#806b70]">
          It is the little conversations, jokes, and random moments that
          make our memories so special.
        </p>
      </div>

      <div className="rounded-3xl border border-[#f3dfe4] bg-white/80 p-7 text-center shadow-[0_15px_40px_rgba(180,130,145,0.10)] transition duration-300 hover:-translate-y-2">
        <div className="mb-4 text-4xl">💗</div>
        <h3 className="font-serif text-xl font-semibold text-[#765763]">
          Simply You
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#806b70]">
          You don't have to be anything else. Just being you is more than
          enough.
        </p>
      </div>

    </div>

  </div>
</section>
{/* LETTER SECTION */}
<section className="px-6 py-24 sm:px-10">
  <div className="mx-auto max-w-3xl text-center">

    <div className="mb-5 text-5xl">💌</div>

    <p className="text-sm uppercase tracking-[0.3em] text-[#c28b9b]">
      A little letter
    </p>

    <h2 className="mt-3 font-serif text-4xl font-semibold text-[#765763] sm:text-5xl">
      For My Pyari Aleena
    </h2>

    <div className="mt-10 rounded-[2rem] border border-[#f3dfe4] bg-white/90 p-8 shadow-[0_20px_60px_rgba(180,130,145,0.15)] sm:p-12">

      <div className="text-3xl">
        🌷 💕 🌷
      </div>

      <p className="mt-8 font-serif text-lg leading-9 text-[#806b70]">
        Dear Aleena,
      </p>

      <p className="mt-5 text-base leading-8 text-[#806b70]">
        On your birthday, I just want you to know how grateful I am
        to have you in my life. Some people come into our lives and
        slowly become a beautiful part of our story — and you are one
        of those people. 🤍
      </p>

      <p className="mt-5 text-base leading-8 text-[#806b70]">
        Thank you for all the laughs, random conversations, little
        memories, and all those moments that somehow become the ones
        we remember the most. 🌸
      </p>

      <p className="mt-5 text-base leading-8 text-[#806b70]">
        I hope this new year of your life brings you endless happiness,
        peace, success, beautiful surprises, and everything your heart
        quietly wishes for. ✨
      </p>

      <p className="mt-5 text-base leading-8 text-[#806b70]">
        Never forget how loved, appreciated, and special you are.
        Keep smiling, keep being your crazy little self, and never
        change the beautiful person you are. 💕
      </p>

      <div className="mx-auto mt-8 h-px w-20 bg-[#e8c4cc]" />

      <p className="mt-8 font-serif text-xl italic text-[#a87886]">
        Happy Birthday, Pyari Aleena 🌷
      </p>

      <p className="mt-3 text-sm text-[#b49ca2]">
        With lots of love & duas ♡
      </p>

    </div>

  </div>
</section>


    </main>
  );
}
