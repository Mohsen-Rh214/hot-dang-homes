import { gql } from "@apollo/client";
import client from "client";

export default function Home(props) {

  console.log('props: ', props)
  return <div>Next JS &amp; WordPress course.</div>;
}

export const getStaticProps = async () => {

  const { data } = await client.query({
    query: gql`
    query NewQuery {
      pages {
        nodes {
          title
        }
      }
    }
    `
  })

  return {
    props: {
      data,
      myExampleProp: "test"
    }
  }
}