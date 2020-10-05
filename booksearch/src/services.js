export default {
    searchBook: async (searchWord) => {
        try {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchWord}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
            return res.json();
        }
        catch (err) {
            return err;
        }
    }
}