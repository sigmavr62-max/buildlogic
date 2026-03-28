// api/index.js
let storage = {
    text: "Waiting...",
    sid: "default"
};

export default function handler(req, res) {
    // Standard headers to make sure Roblox doesn't get blocked
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    if (req.method === 'POST') {
        // This receives data from your "Typewriter Menu"
        const { text, sid } = req.body;
        storage.text = text || "";
        storage.sid = sid || "default";
        
        return res.status(200).json({ status: "Success", received: storage.text });
    } 

    if (req.method === 'GET') {
        // This is what the green HTTP Transmitters in Build Logic see
        // We just send the raw text string so the binary logic can process it
        return res.status(200).send(storage.text);
    }

    return res.status(405).send("Method Not Allowed");
}
