interface Book {
  id: number;
  author: string;
  title: string;
  imgSrc: string;
}

export const books: Book[] = [
  {
    id: 1,
    author: "Barack Obama",
    title: "The Promised Land",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    author: "Ann Whitford Paul",
    title: "If Animals Kissed Good Night",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 4,
    author: "Shannon Olsen",
    title: "Our Class is a Family",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
  },
];