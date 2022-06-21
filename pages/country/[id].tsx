import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {useTodo} from "../../hooks/useTodo";
import {useRouter} from "next/router";
import Link from "next/link";

const Todo: NextPage = () => {

  const {query} = useRouter()

  const {isLoading, todo} = useTodo(Number(query?.id))

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo {query.id}</title>
        <meta name="description" content="todo"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        {todo?.title}
        <div>{todo?.createdAt}</div>
        <button>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </button>
      </main>
    </div>
  )
}

export default Todo
