
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 h-screen">
        {/* Initial 4 boxes */}
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="">HTML</div>
        ))}
      </div>
    </div>
  );
}
