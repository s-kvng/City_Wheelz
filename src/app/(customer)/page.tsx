import Image from "next/image";
import { Button } from '@mantine/core';
import classes from "./page.module.css"
import Landing from "@/features/landing";


export default function Home() {
  return (
    <main className="">
     <Landing/>
    </main>
  );
}
