function prepararPrato(opcao, tempoPadrao) {
    switch (opcao) {
        case 1:
            if ((opcao = 1 && tempoPadrao >= 10 && tempoPadrao <= 20)) {
                return 'Prato pronto, bom apetite!!!'
            } else if ((opcao = 1) && (tempoPadrao < 10)) {
                return 'Tempo insuficiente'
            } else if ((opcao = 1 && tempoPadrao > 20 && tempoPadrao <= 30)) {
                return 'A comida queimou!'
            } else if ((opcao = 1 && tempoPadrao > 30)) {
                return 'Kabum!'
            }
            break;
        case 2:
            if ((opcao = 2 && tempoPadrao >= 8 && tempoPadrao <= 16)) {
                return 'Prato pronto, bom apetite!!!'
            } else if ((opcao = 2) && (tempoPadrao < 8)) {
                return 'Tempo insuficiente'
            } else if ((opcao = 2 && tempoPadrao > 16 && tempoPadrao <= 24)) {
                return 'A comida queimou!'
            } else if ((opcao = 2 && tempoPadrao > 24)) {
                return 'Kabum!'
                break;

            }

        case 3:
            if ((opcao = 3 && tempoPadrao >= 15 && tempoPadrao <= 30)) {
                return 'Prato pronto, bom apetite!!!'
            } else if ((opcao = 3) && (tempoPadrao < 15)) {
                return 'Tempo insuficiente'
            } else if ((opcao = 3 && tempoPadrao > 30 && tempoPadrao <= 45)) {
                return 'A comida queimou!'
            } else if ((opcao = 3 && tempoPadrao > 45)) {
                return 'Kabum!'
                break;

            }

        case 4:
            if ((opcao = 4 && tempoPadrao >= 12 && tempoPadrao <= 24)) {
                return 'Prato pronto, bom apetite!!!'
            } else if ((opcao = 4) && (tempoPadrao < 12)) {
                return 'Tempo insuficiente'
            } else if ((opcao = 4 && tempoPadrao > 24 && tempoPadrao <= 48)) {
                return 'A comida queimou!'
            } else if ((opcao = 4 && tempoPadrao > 48)) {
                return 'Kabum!'
                break;

            }
        case 5:

            if ((opcao = 5 && tempoPadrao >= 8 && tempoPadrao <= 16)) {
                return 'Prato pronto, bom apetite!!!'
            } else if ((opcao = 5) && (tempoPadrao < 8)) {
                return 'Tempo insuficiente'
            } else if ((opcao = 5 && tempoPadrao > 16 && tempoPadrao <= 24)) {
                return 'A comida queimou!'
            } else if ((opcao = 5 && tempoPadrao > 24)) {
                return 'Kabum!'
                break;

            }


        default:
            console.log('Prato inexistente')
    }
}

console.log(prepararPrato(1, 10));