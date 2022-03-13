enum Difficulty {
    Jednoducha = 100,
    Stredni = 50,
    Tezka = 25,
}

//% weight=100 color=#1d1f1d icon="\uf24e" block="Balancování"
namespace Balancovani {

    let okraje = 30
    let x = 0
    let y = 0
    let predchoziX  = 0
    let predchoziY = 0
    let aktualniSouradnice: number[] = []

    /**
    * Spustí hru s obtížností
    * @obtiznost Obtížnost hry
    */
    //% block="Spusť hru s obtížností %obtiznost"
    export function spustitHru(obtiznost: Difficulty): void {
        okraje = obtiznost
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        x = Math.floor(Math.floor(Math.map(input.rotation(Rotation.Roll), -180 + (180 - okraje), 180 - (180 - okraje), -1, 5) / 0.8))
        y = Math.floor(Math.floor(Math.map(input.rotation(Rotation.Pitch), -180 + (180 - okraje), 180 - (180 - okraje), -1, 5) / 0.8))
        led.plot(x, y)
    }

    /**
    * Vrátí aktuální souřadnice
    */
    //% block="Souřadnice"
    export function souradnice(): number[] {
        predchoziX  = x
        predchoziY = y
        x = Math.floor(Math.map(input.rotation(Rotation.Roll), -180 + (180 - okraje), 180 - (180 - okraje), -1, 5) / 0.8)
        y = Math.floor(Math.map(input.rotation(Rotation.Pitch), -180 + (180 - okraje), 180 - (180 - okraje), -1, 5) / 0.8)
        if (x != predchoziX || y != predchoziY) {
            led.unplot(predchoziX, predchoziY)
            led.plot(x, y)
        }
        aktualniSouradnice[0] = x
        aktualniSouradnice[1] = 4 - y

        return aktualniSouradnice
    }






}