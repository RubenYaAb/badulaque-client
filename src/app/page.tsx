
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Next.js App'
}

export default function Home() {

  return (
    <div className="p-6">
      <h1 className="text-center">Home</h1>
    </div>
  );
}
