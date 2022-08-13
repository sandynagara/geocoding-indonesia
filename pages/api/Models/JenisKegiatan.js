const mongoose = require('mongoose')
const mongoosastic = require('mongoosastic')
import { Client } from '@elastic/elasticsearch';

const JenisKegiatan = new mongoose.Schema({
    kegiatan: { type: String, es_indexed: true },
    "jenis kegiatan": String,
    "sub kegiatan": String,
    keterangan:String
},{ collection: 'jenis_kegiatan' })

const client = new Client({
    node:"http://ppids-ugm.com:9200",
    auth:{username:"elastic",password:"changeme"},
})

JenisKegiatan.plugin(mongoosastic, {
    esClient: client 
})

module.exports = mongoose.models["jenis_kegiatan"] || mongoose.model("jenis_kegiatan", JenisKegiatan).synchronize();


