import Search from "./components/Search";
import Image from "next/image";
import "./globals.css"


export default function Home() {
  return (
    <main className="text-center"> 
      <Image 
        src={"https://images.unsplash.com/photo-1522849811436-5e4917aefca1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        layout="fill"
      />

      <Search />
      <h6 className="mt-4"> This code was written by Tyeree A. Tinker </h6>
    </main>
  );
}
