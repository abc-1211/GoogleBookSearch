export default {
    searchBook: async (searchWord) => {
        try {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchWord}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
            return res.json();
        }
        catch (err) {
            return err;
        }
    },
    getSaved: async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/getbooks`);
            return res.json();
        } catch (err) {
            return err;
        }
    },
    setSaved: async (data) => {
        try {
            const res = await fetch(`http://localhost:8080/api/savebook`, {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return res.json();
        } catch (err) {
            return err;
        }
    },
    deleteSaved: async (_id) => {
        try {
            const res = await fetch(`http://localhost:8080/api/deletesaved/${_id}`)
            return res.json();
        } catch (err) {
            return err;
        }
    }
}