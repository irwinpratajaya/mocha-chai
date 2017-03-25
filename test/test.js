let should= require('chai').should()
let number = require('../number-in-words')

describe('test number-in-words.js function', function () {
  it('hasilnya adalah: enam', function () {
    number.in_words(6).should.equal('enam')
  })

  it('hasilnya adalah: seribu dua ratus empat puluh satu', function () {
    number.in_words(1241).should.equal(' seribu dua ratus empat puluh satu')
  })

  it('hasilnya adalah: lima juta dua ratus tiga puluh empat ribu seratus dua puluh lima', function () {
    number.in_words(5234125).should.equal('lima juta dua ratus tiga puluh empat ribu  seratus dua puluh lima')
  })

  it('hasilnya adalah: enam ratus dua puluh tiga juta dua ratus empat puluh tiga ribu seratus lima puluh enam', function () {
    number.in_words(623243156).should.equal('enam ratus dua puluh tiga juta dua ratus empat puluh tiga ribu  seratus lima puluh enam')
  })
})
