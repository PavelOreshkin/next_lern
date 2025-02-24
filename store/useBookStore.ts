import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
// import { devtools } from "zustand/middleware/devtools";

interface BookStore {
  books: {
    id: string;
    name: string;
    description: string;
    cost: number;
    sale: number;
  }[];
  categories: { id: string; name: string }[];
  fetchBooks: () => void;
  // fetchBook: () => void;
}

// devtools
export const useBookStore = create<BookStore>()(
  immer((set) => ({
    books: [],
    categories: [],
    fetchBooks: async () => {
      set({
        books: [
          {
            id: "1",
            name: "book 1",
            description:
              "description book 1 description book 1 description book 1",
            cost: 9,
            sale: 40,
          },
        ],
      });
      // await AppDataSource.initialize();
      // const bookRepo = AppDataSource.getRepository(Book);
      // const books = await bookRepo.find({ relations: ["category"] });
      // set({ books, categories: [...new Set(books.map((b) => b.category.name))] });
    },
  }))
);
