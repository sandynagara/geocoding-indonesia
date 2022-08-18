const mongoose = require('mongoose')
const mongoosastic = require('mongoosastic')
import { Client } from '@elastic/elasticsearch';

const Alamat = new mongoose.Schema({
    kegiatan: { type: String, es_indexed: true },
    "jenis kegiatan": String,
    "sub kegiatan": String,
    keterangan:String
},{ collection: 'alamat' })

const client = new Client({
    node:"http://ppids-ugm.com:9200",
    auth:{username:"elastic",password:"changeme"},
})

JenisKegiatan.plugin(mongoosastic, {
    esClient: client 
})

module.exports = mongoose.models["alamat"] || mongoose.model("alamat", Alamat).synchronize();


