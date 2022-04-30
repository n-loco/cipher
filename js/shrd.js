const TXTF = document.querySelector('#txtf')
const CRIP = document.querySelector('#crip')
const DCCP = document.querySelector('#dccp')
const DCCLR = document.querySelector('#dcclr')

const TXTFC = document.querySelector('#txtfc')
const DCRIP = document.querySelector('#dcrip')
const CCP = document.querySelector('#ccp')
const CCLR = document.querySelector('#cclr')


CRIP.onclick = () => encrypt(TXTF, TXTFC, -1)
DCCP.onclick = () => copy(TXTF)
DCCLR.onclick = () => cleararea(TXTF)

DCRIP.onclick = () => encrypt(TXTFC, TXTF, 1)
CCP.onclick = () => copy(TXTFC)
CCLR.onclick = () => cleararea(TXTFC)


function encrypt(input, output, op = -1) {

    output.value = ''

    const CHARSET = [

        '1234567890',
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm'

    ]

    for ( char in input.value ) {

        output.value += input.value[char]

    }

}

function copy(target) {

    navigator.clipboard.writeText(target.value)

}

function cleararea(target) {

    target.value = ''

}
