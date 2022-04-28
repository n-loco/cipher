const TXTF = document.querySelector('#txtf')
const CRIP = document.querySelector('#crip')
const DCCP = document.querySelector('#dccp')
const DCCLR = document.querySelector('#dcclr')

const TXTFC = document.querySelector('#txtfc')
const DCRIP = document.querySelector('#dcrip')
const CCP = document.querySelector('#ccp')
const CCLR = document.querySelector('#cclr')


CRIP.onclick = () => encrypt(TXTF, TXTFC)
DCCP.onclick = () => copy(TXTF)
DCCLR.onclick = () => cleararea(TXTF)

DCRIP.onclick = () => encrypt(TXTFC, TXTF)
CCP.onclick = () => copy(TXTFC)
CCLR.onclick = () => cleararea(TXTFC)


function encrypt(input, output) {

    output.value = `TEST( ${input.value} )`

}

function copy(target) {

    navigator.clipboard.writeText(target.value)

}

function cleararea(target) {

    target.value = ''

}
