export default async (req, res) => {
    try {
        const { search, id } = req.query
        
        console.log(req.query);

        res.status(200).json({ 
            id: id,
            name: search + ' Doe',
            phone: '1198986565'
        })
    } catch (e) {
        console.log(e);
        res.status(500).send("Error Connecting");
    }
}
