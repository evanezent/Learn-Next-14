export default function Page({ params }: { params: { id: string } }) {
  return <h1>{`My Page ID ---> ${params.id}`}</h1>;
}
