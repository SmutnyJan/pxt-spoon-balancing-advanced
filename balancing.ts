/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#1d1f1d icon="\uf24e"
namespace Balancovani {

    let boundary = 30
    let x = 0
    let y = 0
    let prevX = 0
    let prevY = 0
    let souradnice: number[] = []

    /**
    * Spustí hru a nastaví toleranci
    */
    //% block="Spusť hru s tolerancí %tolerance"
    export function SpustitHru(tolerance: number): void {
        boundary = tolerance
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        x = Math.floor(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4) / 0.8)
        y = Math.floor(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4) / 0.8)
        led.plot(x, y)
    }

    /**
    * Vrátí aktuální souřadnice
    */
    //% block="Souřadnice"
    export function Souradnice(): number[] {
        prevX = x
        prevY = y
        x = Math.floor(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4) / 0.8)
        y = Math.floor(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4) / 0.8)
        if (x != prevX || y != prevY) {
            led.unplot(prevX, prevY)
            led.plot(x, y)
        }
        souradnice[0] = x
        souradnice[1] = 4 - y

        return souradnice
    }






}