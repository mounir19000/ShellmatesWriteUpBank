export default function Loading() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7EE787] mx-auto mb-4" />
        <p className="text-lg text-[#A9A8B3]">Loading...</p>
      </div>
    </div>
  );
}
