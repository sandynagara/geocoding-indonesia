const { Client } = require('@elastic/elasticsearch')

export default async function data(req, res) {
  try{
    const client = new Client({
      node: 'http://ppids-ugm.com:9200',
      auth: {
        username: 'elastic',
        password: 'changeme'
      }
    })
  
    const result= await client.search({
      index: ['geocode_manado','geocode_kebonkelapa','geocode_semarang'],
      query: {
        match: { 
          ALAMAT: {
            "query": req.query.alamatId,
            "fuzziness": "AUTO"
        }}
      }
    })
    res.status(200).json({Hasil:true,Data:result["hits"]})
  }catch(e){
    res.status(500).json({Hasil:false,Data:"Data gagal ditemukan"})
  }
  
}
  