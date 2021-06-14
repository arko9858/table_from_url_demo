import Head from "next/head";
import { Container, Typography } from "@material-ui/core";
import TableFromUrl from "../Component/TableFromUrl";
import SearchBar from "../Component/SearchBar";
import {  useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const baseURL = "https://table-from-url-demo.vercel.app/api/"

  return (
    <div>
      <Head>
        <title>Table From URL Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md" style={{paddingTop:"32px"}}>
        <Typography style={{marginBottom:'16px'}} align="center" variant="h5" component="h1" >Table From URL Demo</Typography>
        <Typography variant="subtitle2">Please try one of these URL's</Typography>
        <Typography variant="body2">{baseURL+"testData1"}</Typography>
        <Typography variant="body2">{baseURL+"testData2"}</Typography>
        

        <SearchBar setData={setData} />
        <TableFromUrl data={data} />
      </Container>
    </div>
  );
}
