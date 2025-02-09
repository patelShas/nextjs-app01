export default function Page() {
  return (
    <>
      <div className="relative top-16 left-16">
        <p className="text-gray-800 text-xl italic">About myself.</p>
      </div>
      <br></br>

      {/* Bottom right text box */}
      <div className="relative flex flex-row justify-center">
        <div className="basis-2/3 border-gray-800 border-2">
          <p className="text-gray-800 text-lg">
            I studied computer science at Northeastern University, up in Boston,
            from 2020 to 2024. I got a Bachelor's of Computer Science there.
            Since then, I've been working as a Data Engineer. I live in New
            York.
          </p>
        </div>
      </div>
    </>
  );
}
