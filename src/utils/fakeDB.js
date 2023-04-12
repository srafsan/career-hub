// use local storage to manage cart data
const addToDb = (id, blog) => {
    let bookmarks = getBookmarks();
    let newBookmarks = [...bookmarks, blog];

    localStorage.setItem("bookmarks-cart", JSON.stringify(newBookmarks));
};

const removeFromDb = (id) => {
    const bookmarks = getBookmarks();
    const filterBookmarks = bookmarks.filter((b) => b.id != id);

    localStorage.setItem("bookmarks-cart", JSON.stringify(filterBookmarks));
};

const getBookmarks = () => {
    let bookmarks = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("bookmarks-cart");

    if (storedCart) {
        bookmarks = JSON.parse(storedCart);
    }

    return bookmarks;
};

const deleteBookmarks = () => {
    localStorage.removeItem("bookmarks-cart");
};

export { addToDb, removeFromDb, getBookmarks, deleteBookmarks };
