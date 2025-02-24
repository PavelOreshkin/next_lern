import { memo, useEffect } from "react";
import { useRouter } from "next/router";
import { useBookStore } from "@/store/useBookStore";

const Book = () => {
  const router = useRouter();
  const { id } = router.query;
  const books = useBookStore((state) => state.books);
  const fetchBooks = useBookStore((state) => state.fetchBooks);
  console.log("books: ", books);
  console.log("router: ", router);

  useEffect(() => {
    fetchBooks();
  }, []);

  return <>Book: {id}</>;
};

export default memo(Book);
