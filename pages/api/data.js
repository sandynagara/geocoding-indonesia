// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose = require('mongoose')
import JenisKegiatan from "./Models/JenisKegiatan"

export default async function data(req, res) {

    mongoose.connect(process.env.MONGODB_URI, function(err) {
        if (err) {
          console.error(err);
        }
        console.log('connected.... unless you see an error the line before this!');
      });

    const results = await JenisKegiatan.search({
        query_string: {
          query: 'Hij1au'
        }
      });

    console.log(results,"result")

    res.status(200).json(results)

}
  