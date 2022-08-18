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
      index: 'kecamatan_semarang_selatan_fix_2',
      size:5,
      query: {
        match: { ALAMAT: req.query.alamatId }
      }
    })
  
    res.status(200).json({Hasil:true,Data:result["hits"]})
  }catch(e){
    res.status(500).json({Hasil:false,Data:"Data gagal ditemukan"})
  }
  
}
  