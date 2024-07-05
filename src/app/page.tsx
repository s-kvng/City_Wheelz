import Image from "next/image";
import { Button } from '@mantine/core';
import classes from "./page.module.css"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" text-xl font-bold text-red-600">
        Hey there
      </div>
      <Button className={classes.btn}>Hi</Button>
    </main>
  );
}
