import express from 'express';
import path from 'path';
const app = express();
const port = 3100;
const clientDistPath = path.resolve(__dirname, '../../client/dist');

app.use(express.static(clientDistPath));
app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
