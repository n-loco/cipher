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
    
    const charset = {

        num: "1234567890",
        qwe: "qwertyuiop",
        QWE: "QWERTYUIOP",
        asd: "asdfghjkl",
        ASD: "ASDFGHJKL",
        zxc: "zxcvbnm",
        ZXC: "ZXCVBNM"

    }

    function pointer( item ) {

        const i = item.indexOf(input.value[char])

        if ( op === -1 && i === 0 ) {

            return item[item.length - 1]

        } else if ( op === 1 && i === item.length - 1 ) {

            return item[0]

        } else {

            return item[i + op]

        }

    }

    output.value = ''

    for ( char in input.value ) {

        if ( charset.num.indexOf(input.value[char]) !== -1 ) {

            output.value += pointer( charset.num )

        } else if ( charset.qwe.indexOf(input.value[char]) !== -1 ) {

            output.value += pointer( charset.qwe )

        } else if ( charset.QWE.indexOf(input.value[char]) !== -1 ) {

            output.value += pointer( charset.QWE )

        } else if ( charset.asd.indexOf(input.value[char]) !== -1 ) {

            output.value += pointer( charset.asd )

        } else if ( charset.ASD.indexOf(input.value[char]) !== -1 ) {

            output.value += pointer( charset.ASD )

        } else if ( charset.zxc.indexOf(input.value[char]) !== -1 ) {

            output.value += pointer( charset.zxc )

        } else if ( charset.ZXC.indexOf(input.value[char]) !== -1 ) {

            output.value += pointer( charset.ZXC )

        } else {

            output.value += input.value[char]

        }

    }

}

function copy(target) {

    navigator.clipboard.writeText(target.value)

}

function cleararea(target) {

    target.value = ''

}
