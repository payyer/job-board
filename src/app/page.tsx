import fs from 'fs';
import { env } from './data/env/server';
export default function Home() {
  console.log(
    console.log(fs.readFileSync(env.DB_CA, 'utf8').toString())
  )
  return (
    <><h1>Hi</h1></>
  );
}
