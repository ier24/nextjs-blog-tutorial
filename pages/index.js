import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  /**
   * ビルド時にこの部分でデータが取得される。外部API等でデータを取得する場合はここで取得する。
   * getStaticProps()を利用しているので、プレレンダリング手法のうちStatic Generationを利用している。
   * 頻繁に更新されるデータを扱う必要がある場合は、サーバーサイドレンダリングを利用する。
   *
   * ```javascript
   * export async function getServerSideProps(context) {
   *  return {
   *   props: {
   *    // props for your component
   *  }
   * }
   * ```
   *
   * サーバー側でgetStaticProps()のみ実行されるため、以下のようなDBへのクエリも可能。
   * ///////
   * const databaseClient = await DatabaseClient.createClient()
   * databaseClient.query('SELECT posts from ...')
   * ///////
   * https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
   *
   * その他、クライアント側でデータを取得する場合、SWRというライブラリの利用が推奨されている。
   * https://swr.vercel.app/ja
   */
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
