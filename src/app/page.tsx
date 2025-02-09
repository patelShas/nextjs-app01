export default function AlbumCover() {
  return (
    <div className="">
      {/* Main "NEET" text positioned in upper left, rotated slightly */}

      {/* Bottom right text box */}
      <div className="absolute bottom-16 right-16 w-1/3 h-1/3 border-2 border-gray-800">
        <div className="p-4">
          <p className="text-gray-800 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa,
            fuga, laboriosam ratione libero minima ut temporibus sit iste natus
            pariatur? Ipsum, suscipit et. Eaque asperiores nihil ipsa esse
            commodi.
          </p>
        </div>
      </div>

      {/* "untrained" text below main title */}
      <div className="absolute top-32 left-32">
        <p className="text-gray-800 text-xl italic">
          A page for me to tell you about myself.
        </p>
      </div>
    </div>
  );
}
