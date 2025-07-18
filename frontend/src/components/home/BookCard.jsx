import BookSingleCard from "./BookSingleCard";

const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item}/>
    ))}
    </div>
  );
};

export default BookCard;
