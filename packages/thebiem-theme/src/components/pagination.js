<Pagination>
  {data.previous && (
    <button onClick={() => actions.router.set(data.previous)}>
      &#171; Prev
    </button>
  )}
  {data.next && (
    <button onClick={() => actions.router.set(data.next)}>Next &#187;</button>
  )}
</Pagination>;
