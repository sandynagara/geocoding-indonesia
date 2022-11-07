const { Client } = require('@elastic/elasticsearch')

export default async function data(req, res) {
  try{
    const client = new Client({
      node: 'https://rispro.es.us-central1.gcp.cloud.es.io/',
      auth: {
        username: 'elastic',
        password: 'qcYpQcSpZuBTOVljzjBPjiqZ'
      }
    })
  
    const result= await client.search({
      index: "geocodingind_all2",
      "query": {
        "multi_match" : {
          "query" : req.query.alamatId,
          "fields" : [ "alamat^3", "provinsi", "kabupaten_kota", "desa_kelurahan", "nama_jalan" ] 
        }
      }
    })
    res.status(200).json({Hasil:true,Data:result["hits"]})
  }catch(e){
    res.status(500).json({Hasil:false,Data:"Data gagal ditemukan"})
  }
  
}
  