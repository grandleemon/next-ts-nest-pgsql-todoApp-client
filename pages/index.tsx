import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import {useTodos} from "../hooks/useTodos";
import {useMutation} from "react-query";
import {ITodo, PostsService} from "../app/services/posts.service";
import Link from "next/link";
import {Slide, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("")
  const [list, setList] = useState<ITodo[]>([])

  const {isLoading, todos, refetch} = useTodos()

  const {isLoading: createLoading, mutateAsync} = useMutation('create country', (title: string) => {
      return PostsService.createTodo(title)
    },
    {
      onSuccess: () => {
        refetch()
        notify()
        setValue("")
      },
      onError: () => {
        toast.error('🦄 Error', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  )

  const handleCreateTodo = async () => {
    await mutateAsync(value)
  }

  const notify = () => toast.success(`Successfully created todo: ${value}!`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide
  });


  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        {isLoading ? <div>Loading...</div> : todos?.length ?
          <div>
            {todos?.map(todo => (
              <div key={todo?.id}>
                <Link href={`/country/${todo?.id}`}>
                  <a>{todo.title}</a>
                </Link>
              </div>
            ))}
          </div> : "Create your first todo now!"}

        <button onClick={handleCreateTodo}>create post</button>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
      </main>
      {createLoading && <div>Loading...</div>}
      <ToastContainer/>
    </div>
  )
}

export default Home
