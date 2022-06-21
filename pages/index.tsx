import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import axios from "axios";
import {useTodos} from "../hooks/useTodos";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("")

  const {isLoading, todos} = useTodos()

  const createPost = async () => {
    await axios.post("/todos", {title: value}).then(({data}) => console.log(data))
    setValue("")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        {/*{isLoading*/}
        {/*  ? <div>Loading...</div>*/}
        {/*  : response?.data?.length ? <button>Get posts</button>*/}
        {/*  <input type="text" value={value} onChange={e => setValue(e.target.value)}/>*/}
        {/*  <button onClick={createPost}>Create Post</button>*/}
        {/*: ""}*/}
        {/*{isLoading */}
        {/*  ? <div>Loading...</div> */}
        {/*  : data?.data?.length */}
        {/*    ? "" : ""}*/}
        {isLoading ? <div>Loading...</div> : todos?.length ?
          <div>
            {todos?.map(todo => (
              <div key={todo?.id}>
                {todo.title}
              </div>
            ))}
          </div> : "Elements not found"}

        <button onClick={createPost}>create post</button>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
      </main>
    </div>
  )
}

export default Home
