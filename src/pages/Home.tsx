import todoArray from '@/data/data'

export default function Home() {
  
  console.table(todoArray)
  return (
    <>
      {todoArray.map((todo:any, index:number) => (
        <>
       <div key={index}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
        <br />
        </>
      ))}
    </>
  )
}
